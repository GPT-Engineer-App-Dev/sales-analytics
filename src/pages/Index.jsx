import { Box, Container, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers } from "react-icons/fa";

const DashboardCard = ({ title, value, icon }) => (
  <Box
    p={5}
    shadow="md"
    borderWidth="1px"
    flex="1"
    borderRadius="md"
    bg="white"
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Box as={icon} size="24px" mb={4} color="teal.500" />
    <Heading fontSize="xl">{title}</Heading>
    <Text mt={4} fontSize="2xl" fontWeight="bold">
      {value}
    </Text>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="teal.500" color="white" p={4} mb={6} justifyContent="center">
        <Heading size="lg">Business Dashboard</Heading>
      </Flex>
      <VStack spacing={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          <DashboardCard title="Sales" value="1,200" icon={FaChartLine} />
          <DashboardCard title="Revenue" value="$34,000" icon={FaDollarSign} />
          <DashboardCard title="Customers" value="300" icon={FaUsers} />
        </SimpleGrid>
        <Box w="full" p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
          <Heading fontSize="xl" mb={4}>
            Other Key Metrics
          </Heading>
          <Text>Average Order Value: $113</Text>
          <Text>Customer Retention Rate: 85%</Text>
          <Text>Net Promoter Score: 72</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;