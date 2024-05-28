import { Box, Container, Flex, Heading, SimpleGrid, Text, VStack, HStack, Spacer, Button } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

const MetricCard = ({ title, value, icon }) => (
  <Box
    p={5}
    shadow="md"
    borderWidth="1px"
    flex="1"
    borderRadius="md"
    bg="white"
    textAlign="center"
  >
    <Icon as={icon} w={10} h={10} color="teal.500" />
    <Heading fontSize="xl" mt={4}>{title}</Heading>
    <Text mt={2} fontSize="2xl" fontWeight="bold">{value}</Text>
  </Box>
);

const NavBar = () => (
  <Box as="nav" bg="teal.500" color="white" p={4} mb={6} borderRadius="md">
    <Flex align="center">
      <Heading size="lg">Business Dashboard</Heading>
      <Spacer />
      <HStack spacing={4}>
        <Button variant="ghost" color="white">Home</Button>
        <Button variant="ghost" color="white">Reports</Button>
        <Button variant="ghost" color="white">Settings</Button>
      </HStack>
    </Flex>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <NavBar />
      <VStack spacing={8} align="stretch">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
          <MetricCard title="Sales" value="1,200" icon={FaChartLine} />
          <MetricCard title="Revenue" value="$34,000" icon={FaDollarSign} />
          <MetricCard title="Customers" value="300" icon={FaUsers} />
        </SimpleGrid>
        <Box w="full" p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white" textAlign="center">
          <Heading fontSize="xl" mb={4}>Other Key Metrics</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
            <MetricCard title="Average Order Value" value="$113" icon={FaDollarSign} />
            <MetricCard title="New Customers" value="50" icon={FaUsers} />
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;