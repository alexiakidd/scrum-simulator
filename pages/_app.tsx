import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import theme from '../src/theme';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
