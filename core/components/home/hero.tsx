import Link from 'next/link';
import { motion } from 'framer-motion';
import { Box, Container, Grid, Group, Image, Stack, Text, Title } from '@mantine/core';
import { Sponsors } from '@/core/utilities';

const Hero = () => {
  return (
    <Box>
      <Box
        component="section"
        id="home"
        style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: 4 }}
      >
        <Container size="xl">
          <Grid gutter="xl" align="center">
            {/* Content */}
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Stack gap="xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Box
                      style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        background: 'var(--mantine-color-climate-1)',
                        color: 'var(--mantine-color-climate-7)',
                        borderRadius: '50px',
                        fontSize: '14px',
                        fontWeight: 500,
                      }}
                    >
                      🌍 Empowering 38 Million African Farmers
                    </Box>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Title
                      order={1}
                      size="3.5rem"
                      c="green"
                      style={{
                        lineHeight: 1.1,
                        background:
                          'linear-gradient(135deg, var(--mantine-color-climate-6), var(--mantine-color-climate-4))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Climate Adaptation for <span>300M Africans</span>
                    </Title>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Text size="xl" c="dimmed" style={{ lineHeight: 1.6, maxWidth: '600px' }}>
                      Livestocx empowers 38 million African smallholder and rural livestock farmers
                      with AI-powered climate adaptation tools, disease early warning systems, and
                      veterinary response services to protect the livelihoods of over 300 million
                      Africans.
                    </Text>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <Group gap="md">
                      {/* <Button 
                      size="lg" 
                      rightSection={<IconArrowRight size={16} />}
                      style={{ transition: 'transform 0.2s' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Get Started
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      leftSection={<IconPlayerPlay size={16} />}
                    >
                      Watch Demo
                    </Button> */}
                      <Link
                        href="https://apps.apple.com/ng/app/livestocx/id6738842775?platform=iphone"
                        target="_blank"
                      >
                        <Image
                          src="/icons/icon_appstore.svg"
                          alt="App Store"
                          w={{ base: 160, sm: 160, md: 200 }}
                          h="auto"
                          fit="contain"
                        />
                      </Link>
                      <Link
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.livestocx.livestocx_mobile"
                      >
                        <Image
                          src="/icons/icon_playstore.svg"
                          alt="Google Play"
                          w={{ base: 160, sm: 160, md: 200 }}
                          h="auto"
                          fit="contain"
                        />
                      </Link>
                    </Group>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <Grid gutter="xl" style={{ paddingTop: '2rem' }}>
                      <Grid.Col span={4}>
                        <Box>
                          <Text size="2rem" fw={700} c="climate.6">
                            13,390
                          </Text>
                          <Text size="sm" c="dimmed">
                            Active Farmers
                          </Text>
                        </Box>
                      </Grid.Col>
                      {/* <Grid.Col span={4}>
                      <Box>
                        <Text size="2rem" fw={700} c="climate.6">
                          190K
                        </Text>
                        <Text size="sm" c="dimmed">
                          Lives Supported
                        </Text>
                      </Box>
                    </Grid.Col> */}
                      <Grid.Col span={4}>
                        <Box>
                          <Text size="2rem" fw={700} c="climate.6">
                            3
                          </Text>
                          <Text size="sm" c="dimmed">
                            Countries
                          </Text>
                        </Box>
                      </Grid.Col>
                    </Grid>
                  </motion.div>
                </Stack>
              </motion.div>
            </Grid.Col>

            {/* Hero Image */}
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box style={{ position: 'relative' }}>
                  <Image
                    src="/images/image_home_2.jpg"
                    alt="African livestock farmers using climate technology"
                    radius="xl"
                    style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                  />

                  {/* Floating Cards */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: -16,
                      right: -16,
                      background: 'white',
                      borderRadius: 8,
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      padding: '8px',
                      maxWidth: '140px',
                    }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Group gap="xs" mb="xs">
                      <Box
                        w={8}
                        h={8}
                        style={{
                          background: 'var(--mantine-color-climate-6)',
                          borderRadius: '50%',
                        }}
                      />
                      <Text size="xs" fw={500}>
                        Live Alert
                      </Text>
                    </Group>
                    <Text size="xs" c="dimmed">
                      Disease outbreak detected: Immediate veterinary response dispatched
                    </Text>
                  </motion.div>

                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: -64,
                      left: -16,
                      background: 'white',
                      borderRadius: 8,
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      padding: '8px',
                      maxWidth: '140px',
                    }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  >
                    <Group gap="xs" mb="xs">
                      <Box
                        w={8}
                        h={8}
                        style={{ background: 'var(--mantine-color-blue-6)', borderRadius: '50%' }}
                      />
                      <Text size="xs" fw={500}>
                        Weather Forecast
                      </Text>
                    </Group>
                    <Text size="xs" c="dimmed">
                      Drought warning in 5 days - prepare emergency feed supplies
                    </Text>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
      <Box mt={{ sm: 100, base: 100, md: 40 }} style={{ overflow: 'hidden', maxWidth: '100%' }}>
        <motion.div
          style={{
            display: 'flex',
            gap: 40,
            width: 'max-content',
          }}
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        >
          {[...Sponsors, ...Sponsors].map((sponsor, index) => (
            <Image
              key={`${sponsor.name}-${index}`}
              width={70}
              height={70}
              src={sponsor.image}
              style={{ objectFit: 'cover', borderRadius: 8 }}
              alt={`Livestocx Backed by: ${sponsor.name}`}
            />
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
