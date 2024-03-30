import { Avatar, Box, Flex, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const FriendUser = ({ ff }) => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={"center"} gap={2}>
				<Link to={`/${ff.username}`}  >
					<Avatar src={ff.profilePicURL} size={"md"} />
				</Link>
				<VStack spacing={2} alignItems={"flex-start"}>
					<Link to={`/${ff.username}`}>
						<Box fontSize={12} fontWeight={"bold"}>
							{ff.fullName}
						</Box>
					</Link>
					<Box fontSize={11} color={"gray.500"}>
						{ff.followers.length} followers
					</Box>
				</VStack>
			</Flex>
    </Flex>
  )
}

export default FriendUser
