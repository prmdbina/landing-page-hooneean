"use client"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Center,
  } from '@chakra-ui/react';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
// import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';
  
  export default function SignInPage() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}> 
            <Link color={'blue.400'}>H</Link>ooneean | Property Management ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>

                <Center p={8}>
                <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
                    {/* Facebook */}
                    <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
                    <Center>
                        <Text>Continue with Facebook</Text>
                    </Center>
                    </Button>

                    {/* Google */}
                    <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                    <Center>
                        <Text>Sign in with Google</Text>
                    </Center>
                    </Button>

                    {/* LinkedIn */}
                    {/* <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
                    <Center>
                        <Text>Send to Linkedin</Text>
                    </Center>
                    </Button> */}

                    {/* Messenger */}
                    {/* <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiMessenger />}>
                    <Center>
                        <Text>Send to Messenger</Text>
                    </Center>
                    </Button> */}
                </Stack>
                </Center>



              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }