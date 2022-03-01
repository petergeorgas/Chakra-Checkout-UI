import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			50: "#F5FEE5",
			100: "#E1FBB2",
			200: "#CDF781",
			300: "#B8EE56",
			400: "#a2e032",
			500: "#8AC919",
			600: "#71ab09",
			700: "#578602",
			800: "#3C5E00",
			900: "#203300",
		},
	},
	fonts: {
		heading: `Montserrat, ${base.fonts.heading}`,
		body: `Inter ${base.fonts.body}`,
	},
	components: {
		Checkbox: {
			baseStyle: {
				control: {
					_focus: {
						ring: 2,
						ringColor: "purple.500",
					},
				},
			},
		},
	},
});

export default theme;
