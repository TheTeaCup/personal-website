import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

export function About() {
  return (
    <>
      <Box id="about" py={{ base: 20, md: 32 }}>
        <Container maxW="1000px">
          <VStack align="start" gap={12}>
            {/* Heading */}
            <VStack align="start" gap={3}>
              <Text
                fontSize="sm"
                fontWeight="600"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color="whiteAlpha.600"
              >
                About Me
              </Text>

              <Heading fontSize={{ base: "3xl", md: "5xl" }}>
                A little about me.
              </Heading>
            </VStack>

            {/* Introduction */}
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="whiteAlpha.700"
              lineHeight="1.8"
              maxW="800px"
            >
              I'm a Cybersecurity and Computer Information Systems student at
              Appalachian State University with an interest in software
              development, cybersecurity, and technology. I enjoy building
              applications, working with infrastructure, and turning ideas into
              useful products.
            </Text>

            {/* Education */}
            <Box>
              <Text
                fontSize="sm"
                fontWeight="600"
                letterSpacing="0.15em"
                textTransform="uppercase"
                color="whiteAlpha.500"
                mb={3}
              >
                Education
              </Text>

              <Heading size="md">Appalachian State University</Heading>

              <Text color="whiteAlpha.600" mt={1}>
                Cybersecurity & Computer Information Systems
              </Text>
            </Box>

            {/* Credentials */}
            <Box>
              <Text
                fontSize="sm"
                fontWeight="600"
                letterSpacing="0.15em"
                textTransform="uppercase"
                color="whiteAlpha.500"
                mb={3}
              >
                Credentials
              </Text>

              <Heading size="md">Notary Public</Heading>

              <Text color="whiteAlpha.600" mt={1}>
                State of North Carolina
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
