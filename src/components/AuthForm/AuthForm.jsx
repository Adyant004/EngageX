import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';
import GoogleAuth from './GoogleAuth';

const AuthForm = () => {
    const [isLogIn,setIsLogIn] = useState(true);

  return (
    <>
      <Box bg={"white"} color={"black"} border={"1px solid gray"} borderRadius={4} p={4} >
        <VStack spacing={4}>
            <Text fontSize={"2rem"}>EngageX</Text>
            <VStack width={{base: "250px",md: "500px"}} alignItems={"self-start"} >
                {isLogIn ? <Login /> : <Signup />}
            </VStack>
            <Flex alignItems={"center"} justifyContent={"center"} w={"full"} gap={1} my={4}>
                <Box flex={2} h={"1px"} bg={"black"} />
                <Text mx={1}>OR</Text>
                <Box flex={2} h={"1px"} bg={"black"} />
            </Flex>
            <GoogleAuth prefix={isLogIn ? 'Log In' : 'Sign Up'} />
            <Flex alignItems={"center"} gap={3}>
                {
                    isLogIn ? (<Text>Don't have an account ?</Text> ) : (<Text>Already have an account</Text> ) 
                }
                <Button onClick={() => setIsLogIn(!isLogIn)} w={"150px"} colorScheme='cyan'>
                    {isLogIn ? "Sign Up" : "Log In"}
                </Button>
            </Flex>
        </VStack>
      </Box>
    </>
  )
}

export default AuthForm
