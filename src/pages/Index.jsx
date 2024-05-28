import { Box, Container, Flex, Heading, SimpleGrid, Stat, StatLabel, StatNumber, VStack } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers } from "react-icons/fa";

const DashboardStat = ({ title, value, icon }) => (
  <Stat p={5} shadow="md" border="1px solid" borderColor="gray.200" borderRadius="md">
    <Flex justifyContent="space-between">
      <Box>
        <StatLabel>{title}</StatLabel>
        <StatNumber>{value}</StatNumber>
      </Box>
      <Box>{icon}</Box>
    </Flex>
  </Stat>
);

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" mb={6} textAlign="center">
        Business Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <DashboardStat title="Sales" value="1,200" icon={<FaChartLine size="3em" />} />
        <DashboardStat title="Revenue" value="$34,000" icon={<FaDollarSign size="3em" />} />
        <DashboardStat title="Customers" value="300" icon={<FaUsers size="3em" />} />
      </SimpleGrid>
    </Container>
  );
};

export default Index;