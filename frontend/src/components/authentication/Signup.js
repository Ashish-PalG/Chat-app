import { Button, FormControl, FormLabel, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";

const Signup = () => {

    const [show, setShow] = useState(false);
    const handlepassClick = () => setShow(!show);

    const [cshow, setCshow] = useState(false);
    const handlecpassClick = () => setCshow(!cshow);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

    const postDetails = (pics) => {}
    const submitHandler = () => {}
  return (
    <VStack spacing="5px">
        <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
                placeholder = 'Enter Your Name'
                onChange={(e) => setName(e.target.value)}
            />
        </FormControl>
        <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
                type="email"
                placeholder="Enter Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
            />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
            <Input
                type={show? "text" : "password"}
                placeholder={"Enter Password"}
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handlepassClick}>
                    {show? "Hide" : "Show"}
                </Button>
            </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={cshow ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handlecpassClick}>
              {cshow ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input 
            type="file"
            p={1.5}
            accept='image/*'
            onChange={(e)=>postDetails(e.target.files[0])} 
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        // isLoading={picLoading}
      >
        Sign Up
      </Button>
    </VStack>
  )
}

export default Signup