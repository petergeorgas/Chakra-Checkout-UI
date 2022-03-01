import type { NextPage } from "next";
import { Container, Flex } from "@chakra-ui/react";
import Details from "../src/sections/details";
import Cart from "../src/sections/cart";
import { product_data } from "../data/cart_data";

const Home: NextPage = () => {
	return (
		<Container maxW="container.xl" p={0}>
			<Flex
				h={{ base: "auto", md: "100vh" }}
				py={[0, 10, 20]}
				direction={{ base: "column-reverse", md: "row" }}
			>
				<Details />
				<Cart items={product_data}/>
			</Flex>
		</Container>
	);
};

export default Home;
