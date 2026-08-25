import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <Box id="contact" py={{ base: 20, md: 32 }} bg="whiteAlpha.50">
      <Container maxW="900px">
        <VStack textAlign="center" align="center" gap={6}>
          <Text
            fontSize="sm"
            fontWeight="600"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="whiteAlpha.600"
          >
            Find Me Online
          </Text>

          <Heading fontSize={{ base: "3xl", md: "5xl" }}>
            Thanks for stopping by.
          </Heading>

          <Text
            maxW="650px"
            fontSize="lg"
            color="whiteAlpha.700"
            lineHeight="1.8"
          >
            Take a look at my projects or connect with me on GitHub and LinkedIn
            to learn more about my work.
          </Text>

          <HStack gap={4} flexWrap="wrap" justify="center">
            <Link
              href="https://github.com/TheTeaCup"
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap={2}
              px={6}
              py={3}
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="full"
              _hover={{
                bg: "whiteAlpha.100",
                textDecoration: "none",
              }}
            >
              <FaGithub />
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/hunter-wilson05/"
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap={2}
              px={6}
              py={3}
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="full"
              _hover={{
                bg: "whiteAlpha.100",
                textDecoration: "none",
              }}
            >
              <FaLinkedin />
              LinkedIn
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
