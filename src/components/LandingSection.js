import React from "react";
import { VStack, Box, Heading, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import heroImage from "../images/photo1.jpg";

const LandingSection = () => {
  return (
    <FullScreenSection isDarkBackground backgroundColor="#18181b" spacing={8}>
      <VStack w="90%" py={16} alignItems="center">
        {/* Hero Image */}
        <Image src={heroImage} height="60vmin" alt="Hero Image" />

        {/* Hero Title */}
        <Heading as="h1" fontSize="6vw" textAlign="center" mt={8}>
          Explore the Boundless Universe of React Space
        </Heading>

        {/* Hero Text */}
        <Text fontSize="4vmin" textAlign="center" mt={8}>
          At React Space, we believe in expanding horizons. With our
          cutting-edge toolkit and middleware-powered redux integration, you'll
          have the tools to create unparalleled Augmented Reality components.
          It's time to set your React app on a course for greatness.
        </Text>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
