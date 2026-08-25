import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  href?: string;
  github?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  href,
  github,
}: ProjectCardProps) {
  return (
    <Box
      overflow="hidden"
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius="2xl"
      bg="whiteAlpha.50"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-6px)",
        borderColor: "whiteAlpha.400",
        bg: "whiteAlpha.100",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* Screenshot */}
      <Box
        position="relative"
        overflow="hidden"
        aspectRatio={16 / 9}
        bg="gray.900"
      >
        <Image
          src={image}
          alt={`${title} screenshot`}
          w="100%"
          h="100%"
          objectFit="cover"
          transition="transform 0.4s ease"
          _groupHover={{
            transform: "scale(1.04)",
          }}
        />
      </Box>

      {/* Content */}
      <VStack align="start" gap={4} p={{ base: 5, md: 6 }}>
        <VStack align="start" gap={2}>
          <Text fontSize="xl" fontWeight="700">
            {title}
          </Text>

          <Text color="whiteAlpha.700" lineHeight="1.7">
            {description}
          </Text>
        </VStack>

        {/* Technologies */}
        <HStack wrap="wrap" gap={2}>
          {technologies.map((technology) => (
            <Badge
              key={technology}
              px={2.5}
              py={1}
              borderRadius="full"
              bg="whiteAlpha.100"
              color="whiteAlpha.800"
            >
              {technology}
            </Badge>
          ))}
        </HStack>

        {/* Links */}
        <HStack gap={3} pt={1}>
          {href && (
            <Button
              asChild
              size="sm"
              borderRadius="full"
              bg="white"
              color="black"
              _hover={{
                bg: "whiteAlpha.800",
              }}
            >
              <Link href={href} rel="noopener noreferrer">
                View Project →
              </Link>
            </Button>
          )}

          {github && (
            <Button asChild size="sm" variant="outline" borderRadius="full">
              <Link href={github} target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
          )}
        </HStack>
      </VStack>
    </Box>
  );
}
