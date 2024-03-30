import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const Signup = () => {
    const [inputs, setInputs] = useState({
        email: "",
        fullName: "",
        username: "",
        password: ""
    })

    const [showPassword,setShowPassword] = useState(false);
    const {loading,error,signup} = useSignUpWithEmailAndPassword();

  return (
    <>
      <Text>Email</Text>
      <Input
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        border={"2px solid black"}
        color={"black"}
        size={'sm'}
        type="email"
      />
      <Text>Full Name</Text>
      <Input
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        border={"2px solid black"}
        color={"black"}
        size={'sm'}
        type="email"
      />
      <Text>User Name</Text>
      <Input
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        border={"2px solid black"}
        color={"black"}
        size={'sm'}
        type="email"
      />
      <Text>Password</Text>
      <InputGroup>
        <Input fontSize={14}
            type={showPassword ? 'text' : 'password'}
            border={"2px solid black"}
            value={inputs.password}
            size={'sm'}
            onChange={(e)=> setInputs({...inputs, password: e.target.value})}
        />
            <InputRightElement h={'full'} >
                <Button color={'black'} variant={'ghost'} size={'sm'} onClick={()=>setShowPassword(!showPassword)} >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
            </InputRightElement>
      </InputGroup>
      {
        error && (
          <Alert status="error" fontSize={12} p={2} borderRadius={4} >
            <AlertIcon fontSize={12} />
            {error.message}
          </Alert>
        )
      }
      <Flex w={'full'} justifyContent={'center'} alignItems={'center'} >
      <Button isLoading={loading} w={"200px"} size={'sm'} colorScheme="blackAlpha" onClick={() => signup(inputs)} >
        Sign Up
      </Button>
      </Flex>
    </>
  );
};

export default Signup;
