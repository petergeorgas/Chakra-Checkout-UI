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
	useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";

const Details = () => {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("ca");

	const colSpan = useBreakpointValue({ base: 2, md: 1 });

	return (
		<VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
			<VStack spacing={3} alignItems="flex-start">
				<Heading size="2xl">Order Details</Heading>
				<Text>
					If you already have an account,{" "}
					<Button variant="link">click here</Button> to log in.
				</Text>
			</VStack>
			<SimpleGrid w="full" columns={2} columnGap={3} rowGap={6} >
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>First Name</FormLabel>
						<Input
							placeholder="John"
							type="text"
							value={fname}
							onChange={(e) => setFname(e.target.value)}
						/>
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>Last Name</FormLabel>
						<Input
							placeholder="Doe"
							type="text"
							value={lname}
							onChange={(e) => {
								setLname(e.target.value);
							}}
						/>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl>
						<FormLabel>Address</FormLabel>
						<Input
							placeholder="350 Bush St."
							value={address}
							onChange={(e) => {
								setAddress(e.target.value);
							}}
						/>
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>City</FormLabel>
						<Input
							placeholder="San Francisco"
							type="text"
							value={city}
							onChange={(e) => {
								setCity(e.target.value);
							}}
						/>
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>State</FormLabel>
						<Select
							value={state}
							onChange={(e) => {
								setState(e.target.value);
							}}
						>
							<option value="ca">CA</option>
							<option value="oh">OH</option>
							<option value="mi">MI</option>
							<option value="pa">PA</option>
							<option value="va">VA</option>
							<option value="dc">DC</option>
						</Select>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<Checkbox defaultChecked colorScheme="purple">Ship to billing address.</Checkbox>
				</GridItem>
				<GridItem colSpan={2}>
					<Button w="full" size="lg" colorScheme="purple">
						Place Order
					</Button>
				</GridItem>
			</SimpleGrid>
		</VStack>
	);
};

export default Details;
