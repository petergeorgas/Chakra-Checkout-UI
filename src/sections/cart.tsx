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
import { ProductData } from "../../data/cart_data";

const Cart = (props: { items: ProductData[] }) => {
	const { items } = props;

	const { toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
	const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

	// Calcualte price
	var subtotal = 0;
	for (var item in items) {
		subtotal += items[item].price;
	}

	const taxes = subtotal * 0.0675;
	const shipping = 9.99;
	const total = subtotal + taxes + shipping;

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
					Prefer dark mode?{" "}
					<Button variant="link" onClick={toggleColorMode}>
						Try changing the theme
					</Button>
					.
				</Text>
			</VStack>
			{items.map((item) => {
				return (
					<HStack w="full" spacing={6} alignContent="space-between">
						<Image w="96px" h="96px" src={item.p_img} />
						<VStack alignItems="flex-start">
							<Text fontWeight="bold" fontSize="x-large">
								{item.name}
							</Text>
							<Text color={secondaryTextColor} fontSize="large">
								{item.p_number}
							</Text>
						</VStack>
						<Spacer />
						<Text fontWeight="bold">${item.price}</Text>
					</HStack>
				);
			})}
			<VStack w="full" spacing={3}>
				<HStack w="full">
					<Text color={secondaryTextColor}>Subtotal</Text>
					<Spacer />
					<Text fontWeight="bold">${subtotal.toFixed(2)}</Text>
				</HStack>
				<HStack w="full">
					<Text color={secondaryTextColor}>Shipping</Text>
					<Spacer />
					<Text fontWeight="bold">${shipping.toFixed(2)}</Text>
				</HStack>
				<HStack w="full">
					<Text color={secondaryTextColor}>Taxes (estimated)</Text>
					<Spacer />
					<Text fontWeight="bold">${taxes.toFixed(2)}</Text>
				</HStack>
				<Divider />
				<HStack w="full">
					<Text color={secondaryTextColor}>Total</Text>
					<Spacer />
					<Text fontWeight="bold" fontSize="3xl">
						${total.toFixed(2)}
					</Text>
				</HStack>
			</VStack>
		</VStack>
	);
};

export default Cart;
