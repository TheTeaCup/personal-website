import { About } from "@/components/homepage/about";
import { Contact } from "@/components/homepage/contact";
import { Experience } from "@/components/homepage/experience";
import { Hero } from "@/components/homepage/hero";
import { Projects } from "@/components/homepage/projects";
import { Skills } from "@/components/homepage/skills";
import { Navbar } from "@/components/navbar";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.950" color="white">
      <Box
        position="relative"
        minH="100vh"
        bgImage="url('/images/background.jpg')"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Box position="absolute" inset="0" bg="blackAlpha.600" />

        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-b, blackAlpha.700, transparent 45%, blackAlpha.800)"
        />

        <Navbar />

        <Hero />
      </Box>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </Box>
  );
}
