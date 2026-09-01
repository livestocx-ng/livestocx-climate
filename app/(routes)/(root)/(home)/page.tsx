'use client';

import { useRef, useState } from 'react';
import { Box } from '@mantine/core';
import Hero from '@/core/components/home/hero';
import ServicesSection from '@/core/components/home/services_section';
import ImpactSection from '@/core/components/home/impact_section';
import PricingSection from '@/core/components/home/pricing_section';

export default function HomePage() {
  const documentRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Box>
      {/* <HomeHeader documentRef={documentRef} /> */}
      <Hero />
      <ServicesSection />
      <ImpactSection />
      <PricingSection />
      {/* <Footer /> */}
    </Box>
  );
}


