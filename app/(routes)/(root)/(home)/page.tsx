'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { Box, Button, Flex, Image, Stack, Text } from '@mantine/core';
import HomeHeader from '@/core/components/home/home_header';
import Hero from '@/core/components/home/hero';
import ServicesSection from '@/core/components/home/services_section';
import ImpactSection from '@/core/components/home/impact_section';

export default function HomePage() {
  const documentRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  const [showLinks, setShowLinks] = useState(false);

  return (
    <Box>
      {/* <HomeHeader documentRef={documentRef} /> */}
      <Hero />
      <ServicesSection />
      <ImpactSection />
      {/* <Footer /> */}
    </Box>
  );
}

