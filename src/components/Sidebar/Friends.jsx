import {
  Box,
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import useAuthStore from "../../store/authStore";
import useShowToast from "../../hooks/useShowToast";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import FriendUser from "../FriendUser/FriendUser";
import { useParams } from "react-router-dom";

const Friends = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {authUser, handleFriends} = getFriends();
  const [followersFriend, setFollowersFriend] = useState([]);
  const [followingFriend, setFollowingFriend] = useState([]);

  useEffect(() => {
    const handleFriendsMain = async () =>{
        const {followers,following} = await handleFriends();
        setFollowersFriend(followers);
        setFollowingFriend(following);
    }

    handleFriendsMain();
  },[authUser]);

  return (
    <>
      <Tooltip
        hasArrow
        label={"Friends"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={onOpen}
        >
          <Icon fontSize={"x-large"} as={FaUserFriends} />
          <Box display={{ base: "none", md: "block" }}>Friends</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Followers</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
            {
                followersFriend.length === 0 ? (
                    <Text>No Followers yet!</Text>
                ) : (
                    followersFriend.map((ff) => (
                        <FriendUser key={ff.id} ff={ff} />
                    ))
                )
            }
            </VStack>
          </ModalBody>

          <ModalHeader>Following</ModalHeader>
          <ModalBody>
            <VStack gap={4} mb={2} >
          {
                followingFriend.length === 0 ? (
                    <Text>No Following yet!</Text>
                ) : (
                    followingFriend.map((ff) => (
                        <FriendUser key={ff.id} ff={ff} />
                    ))
                )
            }
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Friends;

function getFriends() {
    const [isLoading, setIsLoading] = useState(false);
    const authUser = useAuthStore((state) => state.user);
    const showToast = useShowToast();

    const handleFriends = async () =>{
        const following = [];
        const followers = [];
        setIsLoading(true);

        try {
            const userRef = collection(firestore,'users');
            const qfollowers = query(userRef, where('uid','in',[authUser.uid,...authUser.followers]));
            const qfollowing = query(userRef, where('uid','in',[authUser.uid,...authUser.following]));

            const querySnapshotFollowers = await getDocs(qfollowers);
            const querySnapshotFollowing = await getDocs(qfollowing);

            querySnapshotFollowers.forEach((doc) => {
                if(doc.id !== authUser.uid){
                    followers.push({...doc.data(), id:doc.id})
                }
            })

            querySnapshotFollowing.forEach((doc) => {
                if(doc.id !== authUser.uid){
                    following.push({...doc.data(), id: doc.id})
                }
            })

        } catch (error) {
            showToast('Error',error.message,'error');
        } finally {
            setIsLoading(false);
        }

        return {followers,following};
    }

    return {authUser,isLoading, handleFriends};
}