import { Box, Container, Flex, Heading, SimpleGrid, Stat, StatLabel, StatNumber, VStack } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={6} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Business Dashboard</Heading>
      </Flex>
      <VStack spacing={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
          <StatCard title="Sales" value="1,200" icon={<FaShoppingCart />} />
          <StatCard title="Revenue" value="$34,000" icon={<FaDollarSign />} />
          <StatCard title="Customers" value="300" icon={<FaUsers />} />
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

const StatCard = ({ title, value, icon }) => (
  <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" boxShadow="md">
    <Flex justifyContent="space-between" alignItems="center">
      <Box>
        <Stat>
          <StatLabel>{title}</StatLabel>
          <StatNumber>{value}</StatNumber>
        </Stat>
      </Box>
      <Box as="span" color="blue.500" fontSize="2xl">
        {icon}
      </Box>
    </Flex>
  </Box>
);

export default Index;