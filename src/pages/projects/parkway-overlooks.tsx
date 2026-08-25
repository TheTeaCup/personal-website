import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ParkwayOverlooksPage() {
  return (
    <Box minH="100vh" bg="gray.950" color="white">
      <Container maxW="1200px" py={{ base: 12, md: 20 }}>
        {/* Back */}
        <Link
          href="/#projects"
          color="whiteAlpha.600"
          _hover={{
            color: "white",
            textDecoration: "none",
          }}
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <VStack align="start" gap={6} mt={12}>
          <Text
            fontSize="sm"
            fontWeight="600"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="whiteAlpha.600"
          >
            Featured Project
          </Text>

          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            letterSpacing="-0.04em"
          >
            Parkway Overlooks
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            color="whiteAlpha.700"
            maxW="800px"
            lineHeight="1.6"
          >
            A platform for discovering scenic overlooks and viewpoints along the
            Blue Ridge Parkway.
          </Text>

          <HStack gap={3}>
            <Button asChild borderRadius="full" bg="white" color="black">
              <Link href="https://parkwayoverlooks.com" target="_blank">
                Visit Website →
              </Link>
            </Button>

            {/* <Button
              asChild
              borderRadius="full"
              variant="outline"
            >
              <Link
                href="https://github.com/..."
                target="_blank"
              >
                GitHub
              </Link>
            </Button> */}
          </HStack>
        </VStack>

        {/* Hero screenshot */}
        <Box
          mt={16}
          overflow="hidden"
          borderRadius="2xl"
          border="1px solid"
          borderColor="whiteAlpha.200"
        >
          <Image
            src="/images/projects/overlook.png"
            alt="Parkway Overlooks website"
            w="100%"
          />
        </Box>

        {/* Overview */}
        <Box mt={{ base: 20, md: 32 }}>
          <Heading size="xl" mb={6}>
            About the Project
          </Heading>

          <Text
            color="whiteAlpha.700"
            fontSize="lg"
            lineHeight="1.9"
            maxW="800px"
          >
            Parkway Overlooks is a web application designed to help visitors
            discover scenic overlooks along the Blue Ridge Parkway. The project
            combines an interactive map, overlook information, photography, and
            location-based exploration into a single platform.
          </Text>
        </Box>

        {/* Technology */}
        <Box mt={{ base: 20, md: 32 }}>
          <Heading size="xl" mb={8}>
            Technologies
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Chakra UI",
              "MapLibre GL",
              "PMTiles",
              "Prisma",
              "MySQL",
              "Redis",
              "Docker",
              "Cloudflare R2",
            ].map((technology) => (
              <Box
                key={technology}
                p={5}
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="xl"
                bg="whiteAlpha.50"
              >
                <Text fontWeight="600">{technology}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
