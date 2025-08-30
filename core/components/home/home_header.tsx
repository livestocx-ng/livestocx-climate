'use client';

import React from 'react';
import { IconArrowDown } from '@tabler/icons-react';
import { BackgroundImage, Box, Button, Flex, Title } from '@mantine/core';

const HomeHeader = ({ documentRef }: { documentRef: React.RefObject<HTMLDivElement | null> }) => {
  return (
    <BackgroundImage src="/images/image_home_2.jpg">
      <Box w="100%" h="100vh">
        <Flex h="100%" px={20} align="end" justify="center" direction="column">
          <Flex direction="column">
            <Title order={1} size={60} c="white">
              AI-Powered
              <br />
              Climate Resilience
            </Title>
            <Button
              mt={20}
              w={150}
              h={50}
              fw={600}
              variant="filled"
              leftSection={<IconArrowDown size={16} />}
              onClick={() => {
                documentRef?.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </Flex>
        </Flex>
      </Box>
    </BackgroundImage>
  );
};

export default HomeHeader;
