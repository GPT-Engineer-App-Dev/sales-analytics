import { Box, Container, Flex, Heading, SimpleGrid, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box as="header" bg="blue.600" color="white" py={4} mb={6}>
        <Heading as="h1" size="lg" textAlign="center">Business Dashboard</Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={6}>
        <StatCard title="Sales" value="1,200" icon={<FaShoppingCart />} />
        <StatCard title="Revenue" value="$34,000" icon={<FaDollarSign />} />
        <StatCard title="Customers" value="300" icon={<FaUsers />} />
      </SimpleGrid>
      <Box as="footer" textAlign="center" py={4}>
        <Text fontSize="sm" color="gray.500">© 2023 Business Dashboard. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

const StatCard = ({ title, value, icon }) => (
  <Box p={4} borderWidth={1} borderRadius="lg" overflow="hidden" bg="white" shadow="md">
    <Flex justify="space-between" align="center">
      <Box>
        <Stat>
          <StatLabel>{title}</StatLabel>
          <StatNumber>{value}</StatNumber>
        </Stat>
      </Box>
      <Box color="blue.600" fontSize="3xl">
        {icon}
      </Box>
    </Flex>
  </Box>
);

export default Index;