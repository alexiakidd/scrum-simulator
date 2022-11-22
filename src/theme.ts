import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Roboto } from '@next/font/google';

export const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#FCC822',
			light: '#FFF',
		},
		secondary: {
			main: '#333333',
		},
		error: {
			main: red.A400,
		},
		text: {
			primary: '#333333',
			secondary: '#D1D1D1',
		},
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
});

export default theme;
