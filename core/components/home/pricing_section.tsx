'use client';

import Link from 'next/link';
import {
  IconArrowRight,
  IconCheck,
  IconDeviceMobile,
  IconFlame,
  IconHeadset,
  IconHelpCircle,
  IconLockCheck,
  IconShield,
  IconShieldCheck,
  IconSparkles,
  IconTrendingUp,
  IconWorld,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import {
  Accordion,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

export const PricingSection = () => {
  const planFeatures = [
    {
      title: 'AI-Powered Disease Early Warning',
      description:
        'Up to 72-hour advance detection alerts for livestock disease outbreaks before symptoms appear.',
      highlight: true,
    },
    {
      title: 'Real-Time Climate Risk Monitoring',
      description:
        'Continuous predictive monitoring of droughts, extreme heatwaves, and severe weather patterns.',
      highlight: true,
    },
    // {
    //   title: 'On-Demand Veterinary Telemedicine',
    //   description:
    //     'Direct access to certified veterinary experts for rapid diagnosis, treatment advice, and emergency care.',
    //   highlight: true,
    // },
    // {
    //   title: 'SMS & Offline Mobile Services',
    //   description:
    //     'Critical alerts delivered via SMS/USSD, fully functional even in remote areas with poor internet.',
    //   highlight: true,
    // },
    {
      title: 'Farm Climate Resilience Score',
      description:
        'Custom adaptation action plans and risk ratings tailored to your specific herd and farm location.',
      highlight: true,
    },
    // {
    //   title: 'Regional Farmer Network Insights',
    //   description:
    //     'Connected surveillance across Nigeria, Ghana, and Niger sharing localized climate intelligence.',
    //   highlight: false,
    // },
    // {
    //   title: 'Optimized Low-Carbon Logistics',
    //   description:
    //     'Streamlined livestock transportation scheduling and route optimization to minimize transport stress.',
    //   highlight: false,
    // },
    {
      title: 'Verified Farmer Badge & Marketplace',
      description:
        'Enhanced visibility and trusted seller badge on the Livestocx digital agricultural marketplace.',
      highlight: true,
    },
    // {
    //   title: 'Climate Adaptation Training',
    //   description:
    //     'Guided best-practice modules for seasonal feeding, water conservation, and livestock resilience.',
    //   highlight: false,
    // },
    // {
    //   title: '24/7 Priority Emergency Support',
    //   description:
    //     'Fast-track assistance during critical weather incidents or sudden herd health emergencies.',
    //   highlight: false,
    // },
  ];

  const valueStats = [
    {
      icon: IconShieldCheck,
      title: '85% Risk Reduction',
      desc: 'Significant reduction in climate and disease-related livestock losses.',
    },
    {
      icon: IconDeviceMobile,
      title: 'SMS & Low-Bandwidth Ready',
      desc: 'Built specifically for rural farmers and remote grazing territories.',
    },
    {
      icon: IconTrendingUp,
      title: 'Rapid Vet Response',
      desc: 'Expert veterinary consultations at your fingertips whenever needed.',
    },
    {
      icon: IconWorld,
      title: '13,500+ Active Farmers',
      desc: 'Proven impact trusted by farmers.',
    },
  ];

  const faqs = [
    {
      value: 'what-is-in-10-plan',
      question: 'What is included in the $10/month Livestocx Climate plan?',
      answer:
        'The $10/month plan gives you full, unrestricted access to the entire Livestocx Climate suite: AI disease early warning alerts (up to 72 hours in advance), real-time climate risk monitoring (droughts and heatwaves), direct on-demand veterinary telemedicine, SMS/offline alert delivery, personalized farm resilience scoring, and priority marketplace verification.',
    },
    {
      value: 'how-mobile-offline-works',
      question: 'How does the service work in remote areas with minimal or no internet?',
      answer:
        'Our platform features an offline-first mobile sync architecture and automated SMS/USSD broadcasts. Even if you have zero data connectivity on your farm or grazing route, critical disease alerts and extreme weather warnings are delivered straight to your phone as SMS messages.',
    },
    {
      value: 'can-i-cancel-anytime',
      question: 'Can I cancel or pause my subscription at any time?',
      answer:
        'Yes, absolutely. There are no lock-in contracts or hidden cancellation fees. You can pause, restart, or cancel your $10/month subscription at any time directly from your account settings.',
    },
    {
      value: 'what-payment-methods',
      question: 'What payment methods are supported?',
      answer:
        'We support credit/debit cards, bank transfers, mobile money, and local payment methods across Nigeria, Ghana, and Niger.',
    },
  ];

  return (
    <Box
      component="section"
      id="pricing"
      py={96}
      style={{ background: 'var(--mantine-color-gray-0)' }}
    >
      <Container size="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack align="center" gap="md" mb={56}>
            <Title
              order={2}
              size="3rem"
              ta="center"
              style={{
                background:
                  'linear-gradient(135deg, var(--mantine-color-climate-6), var(--mantine-color-climate-4))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              All-Inclusive Climate Resilience for $10/Month
            </Title>

            <Text size="xl" c="dimmed" ta="center" maw={780}>
              One powerful, affordable subscription protecting your entire herd with predictive AI
              climate intelligence and disease early warning.
            </Text>
          </Stack>
        </motion.div>

        {/* Single $10 Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card
            p={0}
            radius="xl"
            mb={72}
            maw={1060}
            mx="auto"
            style={{
              overflow: 'hidden',
              background: '#ffffff',
              border: '2px solid var(--mantine-color-climate-5)',
              boxShadow: '0 25px 60px -15px rgba(46, 179, 117, 0.25)',
              position: 'relative',
            }}
          >
            {/* Top Highlight Banner */}
            {/* <Box
              py={12}
              px={24}
              style={{
                background:
                  'linear-gradient(135deg, var(--mantine-color-climate-6), var(--mantine-color-climate-5))',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <Group justify="center" gap="xs">
                <IconFlame size={18} />
                <Text fw={700} size="sm" style={{ letterSpacing: '0.5px' }}>
                  LIVESTOCX CLIMATE PRO • COMPLETE LIVESTOCK ADAPTATION SUITE
                </Text>
              </Group>
            </Box> */}

            <Box p={{ base: 'xl', md: 44 }}>
              <Grid gutter={{ base: 'xl', md: 48 }} align="stretch">
                {/* Left Column: Price & Call to Action */}
                <Grid.Col span={{ base: 12, md: 5 }}>
                  <Stack justify="space-between" h="100%" gap="xl">
                    <Stack gap="md">
                      {/* <Badge
                        size="md"
                        color="climate"
                        variant="light"
                        radius="sm"
                        w="max-content"
                        style={{ fontWeight: 600 }}
                      >
                        Individual & Commercial Herds
                      </Badge> */}

                      <Title order={3} size="2rem" fw={800} c="dark.9">
                        Climate Resilience Pro
                      </Title>

                      {/* <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                        Full access to our AI monitoring tools, disease early warnings, and
                        veterinary response coordination.
                         across Nigeria, Ghana, and Niger.
                      </Text> */}

                      {/* Pricing Block */}
                      <Box
                        p="lg"
                        radius="md"
                        style={{
                          background: 'linear-gradient(135deg, #f0fdf4 0%, #e6f7f1 100%)',
                          borderRadius: 16,
                          border: '1px solid var(--mantine-color-climate-2)',
                        }}
                      >
                        <Group align="baseline" gap={6}>
                          <Text size="3.5rem" fw={900} c="climate.7" style={{ lineHeight: 1 }}>
                            $10
                          </Text>
                          <Stack gap={0}>
                            <Text size="md" fw={700} c="dark.8">
                              / month
                            </Text>
                            <Text size="xs" c="dimmed" fw={500}>
                              Cancel anytime
                            </Text>
                          </Stack>
                        </Group>

                        <Divider my="sm" color="climate.2" />

                        <Text size="xs" c="climate.9" fw={600}>
                          ✓ No hidden setup fees &nbsp;•&nbsp; ✓ Instant access &nbsp;•&nbsp; ✓
                          Works offline
                        </Text>
                      </Box>
                    </Stack>

                    <Stack gap="sm">
                      <Link
                        href="https://livestocx.com/signup"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          fullWidth
                          size="xl"
                          radius="md"
                          color="climate"
                          rightSection={<IconArrowRight size={22} />}
                          style={{
                            background:
                              'linear-gradient(135deg, var(--mantine-color-climate-6), var(--mantine-color-climate-5))',
                            boxShadow: '0 10px 25px -5px rgba(46, 179, 117, 0.5)',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            height: 56,
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow =
                              '0 14px 30px -5px rgba(46, 179, 117, 0.6)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow =
                              '0 10px 25px -5px rgba(46, 179, 117, 0.5)';
                          }}
                        >
                          Subscribe Now
                        </Button>
                      </Link>

                      
                    </Stack>
                  </Stack>
                </Grid.Col>

                {/* Right Column: Complete Features Breakdown */}
                <Grid.Col span={{ base: 12, md: 7 }}>
                  <Box
                    p={{ base: 'md', md: 'lg' }}
                    style={{
                      background: 'var(--mantine-color-gray-0)',
                      borderRadius: 16,
                      height: '100%',
                      border: '1px solid var(--mantine-color-gray-2)',
                    }}
                  >
                    <Title order={4} size="1.1rem" fw={700} mb="md" c="dark.8">
                      Everything Included with Your $10 Subscription:
                    </Title>

                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                      {planFeatures.map((feat, idx) => (
                        <Group key={idx} align="flex-start" gap="xs" wrap="nowrap">
                          <ThemeIcon
                            size={22}
                            radius="xl"
                            color="climate"
                            variant={feat.highlight ? 'filled' : 'light'}
                            style={{ marginTop: 2, flexShrink: 0 }}
                          >
                            <IconCheck size={13} stroke={3} />
                          </ThemeIcon>
                          <Box>
                            <Text
                              size="sm"
                              fw={feat.highlight ? 700 : 600}
                              c="dark.9"
                              style={{ lineHeight: 1.3 }}
                            >
                              {feat.title}
                            </Text>
                            <Text size="xs" c="dimmed" mt={3} style={{ lineHeight: 1.4 }}>
                              {feat.description}
                            </Text>
                          </Box>
                        </Group>
                      ))}
                    </SimpleGrid>
                  </Box>
                </Grid.Col>
              </Grid>
            </Box>
          </Card>
        </motion.div>

        {/* Why $10/mo Value Highlights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            p={{ base: 'xl', md: 40 }}
            mb={72}
            maw={1060}
            mx="auto"
            style={{
              background:
                'linear-gradient(135deg, var(--mantine-color-climate-7), var(--mantine-color-climate-9))',
              borderRadius: 20,
              color: 'white',
              boxShadow: '0 20px 40px -10px rgba(10, 55, 34, 0.35)',
            }}
          >
            <Grid gutter="xl" align="center">
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Stack gap="xs">
                  {/* <Badge color="white" variant="outline" size="sm" w="max-content">
                    High Return on Investment
                  </Badge> */}
                  <Title order={3} size="1.7rem" c="white">
                    Protecting $1000s in Livestock for $10/mo
                  </Title>
                  <Text size="sm" style={{ opacity: 0.9, lineHeight: 1.6 }}>
                    A single herd infection prevented or early drought mitigation pays for years of
                    subscription.
                  </Text>
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 8 }}>
                <Grid gutter="md">
                  {valueStats.map((item, idx) => (
                    <Grid.Col key={idx} span={{ base: 12, sm: 6 }}>
                      <Card
                        p="md"
                        radius="md"
                        style={{
                          background: 'rgba(255, 255, 255, 0.08)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: 'white',
                        }}
                      >
                        <Group align="flex-start" gap="sm">
                          <Box
                            p={8}
                            style={{
                              background: 'rgba(255, 255, 255, 0.15)',
                              borderRadius: 8,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <item.icon size={22} color="white" />
                          </Box>
                          <Box style={{ flex: 1 }}>
                            <Text fw={700} size="sm" c="white">
                              {item.title}
                            </Text>
                            <Text size="xs" style={{ opacity: 0.8, marginTop: 4, lineHeight: 1.4 }}>
                              {item.desc}
                            </Text>
                          </Box>
                        </Group>
                      </Card>
                    </Grid.Col>
                  ))}
                </Grid>
              </Grid.Col>
            </Grid>
          </Box>
        </motion.div>

        {/* Pricing FAQs Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack align="center" gap="md" mb={32}>
            <Title order={3} size="2rem" ta="center">
              Frequently Asked Questions
            </Title>
            <Text size="md" c="dimmed" ta="center" maw={600}>
              Have questions about our $10/month subscription? We've got answers.
            </Text>
          </Stack>

          <Box maw={850} mx="auto">
            <Accordion
              variant="separated"
              radius="md"
              styles={{
                item: {
                  backgroundColor: 'white',
                  border: '1px solid var(--mantine-color-gray-2)',
                  marginBottom: 12,
                },
                control: {
                  fontSize: '1rem',
                  fontWeight: 600,
                  padding: '16px 20px',
                },
                panel: {
                  padding: '0 20px 16px 20px',
                  color: 'var(--mantine-color-gray-7)',
                  lineHeight: 1.6,
                },
              }}
            >
              {faqs.map((faq) => (
                <Accordion.Item key={faq.value} value={faq.value}>
                  <Accordion.Control
                    icon={<IconHelpCircle size={18} color="var(--mantine-color-climate-6)" />}
                  >
                    {faq.question}
                  </Accordion.Control>
                  <Accordion.Panel>{faq.answer}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PricingSection;
