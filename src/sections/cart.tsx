import {
	VStack,
	Heading,
	Text,
	SimpleGrid,
	GridItem,
	FormControl,
	FormLabel,
	Input,
	Select,
	Checkbox,
	Button,
	HStack,
	Image,
	Spacer,
	Divider,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";

const Cart = () => {
	const { toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
	const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

	return (
		<VStack
			w="full"
			h="full"
			p={10}
			spacing={10}
			alignItems="flex-start"
			bg={bgColor}
		>
			<VStack spacing={3} alignItems="flex-start">
				<Heading size="2xl">Your Cart</Heading>
				<Text>
					If price is too hard on your eyes,{" "}
					<Button variant="link" onClick={toggleColorMode}>
						try changing the theme
					</Button>
					.
				</Text>
			</VStack>
			<HStack w="full" spacing={6}>
				<Image
					w="96px"
					h="96px"
					src="https://cdn.shopify.com/s/files/1/0062/4915/2581/products/pnycomp27473_1-Blue_1024x1024.jpg?v=1556646870"
				/>
				<VStack alignItems="flex-start">
					<Text fontWeight="bold" fontSize="x-large">
						Penny board
					</Text>
					<Text color={secondaryTextColor} fontSize="large">
						PNYCOMP27541
					</Text>
				</VStack>
				<Spacer />
				<Text fontWeight="bold">$119.95</Text>
			</HStack>
			<VStack w="full" spacing={3}>
				<HStack w="full">
					<Text color={secondaryTextColor}>Subtotal</Text>
					<Spacer />
					<Text fontWeight="bold">$119.95</Text>
				</HStack>
				<HStack w="full">
					<Text color={secondaryTextColor}>Shipping</Text>
					<Spacer />
					<Text fontWeight="bold">$19.99</Text>
				</HStack>
				<HStack w="full">
					<Text color={secondaryTextColor}>Taxes (estimated)</Text>
					<Spacer />
					<Text fontWeight="bold">$23.80</Text>
				</HStack>
				<Divider />
				<HStack w="full">
					<Text color={secondaryTextColor}>Total</Text>
					<Spacer />
					<Text fontWeight="bold" fontSize="3xl">
						$163.74
					</Text>
				</HStack>
			</VStack>
		</VStack>
	);
};

export default Cart;
