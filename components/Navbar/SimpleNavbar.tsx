import * as React from "react";

import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FiMenu } from "react-icons/fi";
import { GrHome } from "react-icons/gr";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SimpleNavbar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="section" h="81px">
      <Box as="nav" bg="bg-surface">
        <Flex
          py={{ base: "4", lg: "5" }}
          borderColor="none"
          flexFlow="column wrap"
          alignContent="flex-end"
          margin="0 2rem"
        >
          <HStack spacing="10" justify="space-between" alignItems="center">
            {/* {isDesktop ? ( */}
            <Flex justify="space-between" flex="1">
              {/* <IconButton
                  variant="ghost"
                  aria-label="homepage-icon"
                  icon={<GrHome size={25} />}
                /> */}
              <HStack spacing="3">
                {/* <IconButton
                    variant="ghost"
                    aria-label="Toggle Light Mode"
                    icon={<SunIcon boxSize={5} />}
                  /> */}

                <IconButton
                  variant="ghost"
                  aria-label={`Toggle ${
                    colorMode === "light" ? "Dark" : "Light"
                  } Mode`}
                  onClick={toggleColorMode}
                  icon={
                    colorMode === "light" ? (
                      <MoonIcon boxSize={5} />
                    ) : (
                      <SunIcon boxSize={5} />
                    )
                  }
                />
              </HStack>
            </Flex>
            {/* ) */}
            {/* : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )} */}
          </HStack>
        </Flex>
      </Box>
      <Divider />
    </Box>
  );
}
