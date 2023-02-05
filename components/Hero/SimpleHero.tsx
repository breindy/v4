import {
  Avatar,
  Badge,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

import { FiGithub } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";

import * as rainbowCatNFT from "/rainbow-cat.jpg";

export const SimpleHero = () => {
  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");

  const headingColor = useColorModeValue("#399CF9", "white");
  const badgeTextColor = useColorModeValue("#399CF9", "white");

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
                    <Box borderRadius="50%" overflow="hidden">
                      <Image
                        src={rainbowCatNFT}
                        alt="Michelle Uy's rainbow cat NFT"
                        width={150}
                        height={150}
                      />
                    </Box>
                  </Center>
                  <Heading
                    size={useBreakpointValue({ base: "md", md: "xl" })}
                    color={headingColor}
                    textAlign="center"
                    fontFamily="Gotham"
                  >
                    Michelle Uy
                  </Heading>
                  <Center>
                    <Stack direction={{ base: "column", md: "row" }}>
                      <Flex justifyContent="center">
                        <Badge
                          colorScheme="blue"
                          alignSelf="start"
                          borderRadius="7px"
                          fontSize={useBreakpointValue({
                            base: "md",
                            md: "lg",
                          })}
                        >
                          Software Engineer 👩🏻‍💻
                        </Badge>
                      </Flex>
                      <Flex justifyContent="center">
                        <Badge
                          colorScheme="blue"
                          alignSelf="start"
                          borderRadius="7px"
                          fontSize={useBreakpointValue({
                            base: "md",
                            md: "lg",
                          })}
                        >
                          Keyboard Enthusiast ⌨️
                        </Badge>
                      </Flex>
                      <Flex justifyContent="center">
                        <Badge
                          colorScheme="blue"
                          alignSelf="start"
                          borderRadius="7px"
                          fontSize={useBreakpointValue({
                            base: "md",
                            md: "lg",
                          })}
                        >
                          Animal Lover 🐶
                        </Badge>
                      </Flex>
                    </Stack>
                  </Center>
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
                  <Link
                    href="https://linkedin.com/in/michelleuy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      variant="ghost"
                      aria-label="Go to Linkedin Profile"
                      icon={<RxLinkedinLogo size={30} />}
                    />
                  </Link>
                  <Link
                    href="mailto:michelleuyccny@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
