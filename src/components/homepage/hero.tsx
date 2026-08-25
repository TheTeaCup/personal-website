import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export function Hero() {
  return (
    <>
      <Container
        position="relative"
        zIndex="1"
        maxW="1200px"
        minH="calc(100vh - 100px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={6}
      >
        <VStack gap={6} textAlign="center">
          {/* Profile picture */}
          <Box
            w={{ base: "150px", md: "190px" }}
            h={{ base: "150px", md: "190px" }}
            borderRadius="full"
            overflow="hidden"
            border="4px solid"
            borderColor="whiteAlpha.800"
            boxShadow="0 20px 60px rgba(0, 0, 0, 0.5)"
          >
            <Image
              src="/images/profile.jpg"
              alt="Hunter Wilson"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>

          <VStack gap={2}>
            <Text
              fontSize="sm"
              fontWeight="600"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="whiteAlpha.800"
            >
              Cybersecurity • Software • Technology
            </Text>

            <Heading
              as="h1"
              fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
              fontWeight="800"
              letterSpacing="-0.04em"
              lineHeight="1"
            >
              Hunter Wilson
            </Heading>

            <Text
              maxW="650px"
              fontSize={{ base: "md", md: "xl" }}
              color="whiteAlpha.800"
              lineHeight="1.7"
            >
              Building software, exploring technology, and creating things that
              make an impact.
            </Text>
          </VStack>

          <HStack gap={4} pt={2}>
            <Button
              asChild
              size="lg"
              borderRadius="full"
              bg="white"
              color="black"
              px={7}
              _hover={{
                bg: "whiteAlpha.800",
                transform: "translateY(-2px)",
              }}
              transition="all 0.2s"
            >
              <Link href="#projects">View My Work</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              borderRadius="full"
              px={7}
              borderColor="whiteAlpha.500"
              _hover={{
                bg: "whiteAlpha.200",
              }}
            >
              <Link href="#about">About Me</Link>
            </Button>
          </HStack>

          <HStack gap={5}>
            <Link
              href="https://github.com/TheTeaCup"
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap={2}
              color="whiteAlpha.700"
              _hover={{ color: "white" }}
            >
              <FaGithub size={18} />
              <Text>GitHub</Text>
            </Link>

            <Link
              href="https://www.linkedin.com/in/hunter-wilson05"
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap={2}
              color="whiteAlpha.700"
              _hover={{ color: "white" }}
            >
              <FaLinkedin size={18} />
              <Text>LinkedIn</Text>
            </Link>
          </HStack>
        </VStack>
      </Container>
      {/* Scroll indicator */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        zIndex="1"
        textAlign="center"
      >
        <Text
          fontSize="xs"
          textTransform="uppercase"
          letterSpacing="0.2em"
          color="whiteAlpha.600"
        >
          Scroll to explore
        </Text>

        <Box
          mx="auto"
          mt={3}
          w="1px"
          h="45px"
          bgGradient="linear(to-b, whiteAlpha.600, transparent)"
        />
      </Box>
    </>
  );
}
