import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Parkway Overlooks",
    description:
      "A web application for discovering scenic overlooks and viewpoints along the Blue Ridge Parkway.",
    image: "/images/projects/parkway-overlooks.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Chakra UI",
      "MapLibre",
      "Cloudflare",
    ],
    href: "/projects/parkway-overlooks",
  },
];

export function Projects() {
  return (
    <Box id="projects" py={{ base: 20, md: 32 }}>
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
              Selected Work
            </Text>

            <Heading fontSize={{ base: "3xl", md: "5xl" }}>Projects</Heading>

            <Text color="whiteAlpha.700" fontSize="lg" maxW="650px">
              A collection of things I've designed, developed, and built.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} w="100%">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
