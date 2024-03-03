import { Container, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

const AuthPage = () => {
  return (
    <>
      <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={'550px'} padding={0} >
          <VStack spacing={4} align={"stretch"}>
              <AuthForm />
          </VStack>
        </Container>
      </Flex>
    </>
  )
}

export default AuthPage
