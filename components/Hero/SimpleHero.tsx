import {
  Avatar,
  Badge,
  Box,
  Center,
  Container,
  Heading,
  HStack,
  IconButton,
  Link,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { FiGithub } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";

export const SimpleHero = () => {
  return (
    <Box as="section" bg="bg-surface">
      <Box position="relative" height={{ lg: "720px" }}>
        <Container py={{ base: "16", md: "24" }} height="full">
          <Stack
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "center" }}
            height="full"
          >
            <Stack spacing={{ base: "8", md: "12" }}>
              <Stack spacing="4">
                <Stack
                  spacing={{ base: "4", md: "6" }}
                  maxW={{ md: "xl", lg: "md", xl: "xl" }}
                  align="stretch"
                >
                  <Center>
                    <Avatar
                      name="Michelle Uy"
                      size="2xl"
                      src="/landing-profile-picture.jpg"
                    />
                  </Center>
                  <Heading
                    size={useBreakpointValue({ base: "md", md: "xl" })}
                    color="#399CF9"
                    textAlign="center"
                    fontFamily="Gotham"
                  >
                    Michelle Uy
                  </Heading>
                  <HStack>
                    <Badge
                      colorScheme="blue"
                      alignSelf="start"
                      borderRadius="7px"
                      size={useBreakpointValue({ base: "md", md: "lg" })}
                    >
                      Software Engineer 👩🏻‍💻
                    </Badge>
                    <Badge
                      colorScheme="blue"
                      alignSelf="start"
                      borderRadius="7px"
                      size={useBreakpointValue({ base: "md", md: "lg" })}
                    >
                      Keyboard Enthusiast ⌨️
                    </Badge>
                    <Badge
                      colorScheme="blue"
                      alignSelf="start"
                      borderRadius="7px"
                      size={useBreakpointValue({ base: "md", md: "lg" })}
                    >
                      Animal Lover 🐶
                    </Badge>
                  </HStack>
                </Stack>
              </Stack>
              <Center>
                <Stack direction={{ base: "column", md: "row" }}>
                  <Link
                    href="https://github.com/breindy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      variant="ghost"
                      aria-label="Go to Github Profile"
                      icon={<FiGithub size={30} />}
                    />
                  </Link>
                  <Link href="https://linkedin.com/in/michelleuy" target="_blank" rel="noopener noreferrer">
                    <IconButton
                      variant="ghost"
                      aria-label="Go to Linkedin Profile"
                      icon={<RxLinkedinLogo size={30} />}
                    />
                  </Link>
                  <Link href="mailto:michelleuyccny@gmail.com" target="_blank" rel="noopener noreferrer">
                    <IconButton
                      variant="ghost"
                      aria-label="Email"
                      icon={<MdAlternateEmail size={30} />}
                    />
                  </Link>
                </Stack>
              </Center>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default SimpleHero;
