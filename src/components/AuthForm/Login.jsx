import { Alert, AlertIcon, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { login, loading, error } = useLogin();

  return (
    <>
      <Text>Email</Text>
      <Input
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        border={"2px solid black"}
        color={"black"}
        size={"sm"}
        type="email"
      />
      <Text>Password</Text>
      <Input
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        border={"2px solid black"}
        size={"sm"}
        type="password"
        placeholder="Password"
      />
        {error && (
          <Alert status="error" fontSize={12} p={2} borderRadius={4}>
            <AlertIcon fontSize={12} />
            {error.message}
            {console.log(error.message)}
          </Alert>
        )}
      <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
        <Button
          isLoading={loading}
          w={"200px"}
          size={"sm"}
          colorScheme="blackAlpha"
          onClick={() => login(inputs)}
        >
          Log In
        </Button>
      </Flex>
    </>
  );
};

export default Login;
