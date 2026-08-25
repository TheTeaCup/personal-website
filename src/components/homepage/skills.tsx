import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const skills = [
  {
    title: "Languages",
    items: "TypeScript, JavaScript, PHP, Python, SQL",
  },
  {
    title: "Frontend",
    items: "React, Next.js, Chakra UI, HTML, CSS",
  },
  {
    title: "Backend",
    items: "Node.js, Express, REST APIs, Prisma",
  },
  {
    title: "Infrastructure",
    items: "Linux, Docker, Proxmox, GitHub Actions",
  },
  {
    title: "Databases",
    items: "MySQL, MongoDB, Redis",
  },
  {
    title: "Other",
    items: "Git, Cloudflare, MapLibre, PMTiles",
  },
];

export function Skills() {
  return (
    <Box id="skills" py={{ base: 20, md: 32 }} bg="whiteAlpha.50">
      <Container maxW="1200px">
        <VStack align="start" gap={10}>
          <VStack align="start" gap={3}>
            <Text
              fontSize="sm"
              fontWeight="600"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="whiteAlpha.600"
            >
              Technologies
            </Text>

            <Heading fontSize={{ base: "3xl", md: "5xl" }}>
              What I work with
            </Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5} w="100%">
            {skills.map((skill) => (
              <Box
                key={skill.title}
                p={6}
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="xl"
              >
                <Heading size="sm" mb={3}>
                  {skill.title}
                </Heading>

                <Text color="whiteAlpha.700" lineHeight="1.7">
                  {skill.items}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
