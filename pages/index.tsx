import Head from "next/head";
import Image from "next/image";
import * as React from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FiMenu } from "react-icons/fi";

import { Inter } from "@next/font/google";
// import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" bg="bg-surface">
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <Tabs colorScheme="red.600" isFitted variant="unstyled">
                  <TabList>
                    {["About", "Experience", "Projects", "Contact"].map(
                      (item) => (
                        <Tab
                          key={item}
                          fontSize="md"
                          _selected={{ color: "red.600", fontWeight: "bold" }}
                        >
                          {item}
                        </Tab>
                      )
                    )}
                  </TabList>
                  <TabIndicator
                    mt="4"
                    height={1}
                    borderTopRadius="md"
                    bg="red.600"
                  />
                </Tabs>
                <HStack spacing="3">
                  <IconButton
                    variant="ghost"
                    aria-label="Toggle Light Mode"
                    icon={<SunIcon boxSize={5} />}
                  />

                  <IconButton
                    variant="ghost"
                    aria-label="Toggle Dark Mode"
                    icon={<MoonIcon boxSize={5} />}
                  />
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
      <Divider />
    </Box>
  );
}
