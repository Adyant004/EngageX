import { Avatar, Box, Button, Flex, Image, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {InstagramMobileLogo} from "../../assets/constants";
import { CiLogout } from "react-icons/ci";
import SidebarItems from "./SidebarItems";
import useLogout from "../../hooks/useLogOut";

const Sidebar = () => {

  const {handleLogout,isLoggingOut} = useLogout();

  return (
    <>
      <Box
        height={"100vh"}
        borderRight={"1px solid blue"}
        borderColor={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{ base: 2, md: 4 }}
      >
        <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
          <Link
            to={"/"}
            as={RouterLink}
            pl={2}
            display={{ base: "none", md: "block" }}
            cursor={"pointer"}
          >
            <Image src="\EngageX.png" />
          </Link>
          <Link
            to={"/"}
            as={RouterLink}
            p={2}
            display={{ base: "block", md: "none" }}
            cursor={"pointer"}
            borderRadius={6}
            _hover={{
              bg: "whiteAlpha.200",
            }}
            w={10}
          >
            <InstagramMobileLogo />
          </Link>
          <Flex direction={"column"} gap={5} cursor={"pointer"} >
            <SidebarItems />
          </Flex>
          <Tooltip  
                  hasArrow
                  label={'Log Out'}
                  placement="right"
                  ml={1}
                  openDelay={500}
                  display={{base:'block',md: 'none'}}
                >
                  <Flex
                    onClick={handleLogout}
                    alignItems={"center"}
                    gap={4}
                    mt={"auto"}
                    _hover={{bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    w={{base: 10,md: "full"}}
                    justifyContent={{base:"center",md:"flex-start"}}
                    cursor={'pointer'}
                  >
                    <CiLogout size={25} />
                    <Button variant={'ghost'} isLoading={isLoggingOut} _hover={{bg: 'transparent'}} display={{base:"none",md: "block"}} >Log Out</Button>
                  </Flex>
                </Tooltip>
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
