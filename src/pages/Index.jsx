import { Box, Container, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
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

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="teal.500" color="white" p={4} mb={6} borderRadius="md">
        <Heading size="lg">Business Dashboard</Heading>
      </Box>
      <VStack spacing={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
          <MetricCard title="Sales" value="1,200" icon={FaChartLine} />
          <MetricCard title="Revenue" value="$34,000" icon={FaDollarSign} />
          <MetricCard title="Customers" value="300" icon={FaUsers} />
        </SimpleGrid>
        <Box w="full" p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
          <Heading fontSize="xl" mb={4}>Other Key Metrics</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <MetricCard title="Average Order Value" value="$113" icon={FaDollarSign} />
            <MetricCard title="New Customers" value="50" icon={FaUsers} />
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;