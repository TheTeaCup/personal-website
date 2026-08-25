import { Container, Flex, HStack, Link } from "@chakra-ui/react";

export function Navbar() {
  return (
    <>
      <Container
        position="relative"
        zIndex="1"
        maxW="1200px"
        pt={{ base: 5, md: 8 }}
      >
        <Flex
          align="center"
          justify="space-between"
          px={{ base: 4, md: 6 }}
          py={4}
          border="1px solid"
          borderColor="whiteAlpha.300"
          borderRadius="full"
          bg="blackAlpha.300"
          backdropFilter="blur(12px)"
        >
          <Link
            href="/"
            fontWeight="700"
            fontSize="lg"
            _hover={{ textDecoration: "none" }}
          >
            HW
          </Link>

          <HStack
            gap={{ base: 4, md: 8 }}
            display={{ base: "none", md: "flex" }}
          >
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#contact">Contact</Link>
          </HStack>
        </Flex>
      </Container>
    </>
  );
}
