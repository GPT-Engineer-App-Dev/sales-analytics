import { Box, Container, Flex, Heading, SimpleGrid, Text, VStack, Icon } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers } from "react-icons/fa";

const MetricCard = ({ title, value, icon }) => (
  <Box
    p={5}
    shadow="md"
    borderWidth="1px"
    flex="1"
    borderRadius="md"
    bg="white"
    display="flex"
    alignItems="center"
  >
    <Icon as={icon} w={6} h={6} mr={4} />
    <Box>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={2}>{value}</Text>
    </Box>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={6} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Business Dashboard</Heading>
      </Flex>
      <VStack spacing={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
          <MetricCard title="Sales" value="1,200" icon={FaChartLine} />
          <MetricCard title="Revenue" value="$34,000" icon={FaDollarSign} />
          <MetricCard title="Customers" value="300" icon={FaUsers} />
        </SimpleGrid>
        <Box w="full" p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
          <Heading fontSize="xl" mb={4}>Other Key Metrics</Heading>
          <Text>Average Order Value: $113</Text>
          <Text>Customer Satisfaction: 89%</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;