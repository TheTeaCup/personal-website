import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

const experience = [
  {
    position: "Administrative Assistant",
    organization: "Appalachian State University",
    period: "Present",
    description:
      "Supporting university operations and providing administrative assistance through Campus Services.",
  },
  //   {
  //     position: "Student Orientation Leader",
  //     organization: "Appalachian State University",
  //     period: "2024 – Present",
  //     description:
  //       "Helping new students transition into the Appalachian State University community.",
  //   },
];

export function Experience() {
  return (
    <Box id="experience" py={{ base: 20, md: 32 }}>
      <Container maxW="1000px">
        <VStack align="start" gap={10}>
          <VStack align="start" gap={3}>
            <Text
              fontSize="sm"
              fontWeight="600"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="whiteAlpha.600"
            >
              Background
            </Text>

            <Heading fontSize={{ base: "3xl", md: "5xl" }}>Experience</Heading>
          </VStack>

          <VStack align="stretch" gap={8} w="100%">
            {experience.map((item) => (
              <Box
                key={item.position}
                pl={6}
                borderLeft="2px solid"
                borderColor="whiteAlpha.300"
              >
                <HStack
                  justify="space-between"
                  align="start"
                  flexWrap="wrap"
                  gap={2}
                >
                  <VStack align="start" gap={1}>
                    <Heading size="md">{item.position}</Heading>

                    <Text color="whiteAlpha.600">{item.organization}</Text>
                  </VStack>

                  <Text
                    fontSize="sm"
                    color="whiteAlpha.500"
                    whiteSpace="nowrap"
                  >
                    {item.period}
                  </Text>
                </HStack>

                <Text
                  mt={4}
                  color="whiteAlpha.700"
                  lineHeight="1.7"
                  maxW="750px"
                >
                  {item.description}
                </Text>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
