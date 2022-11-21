import { AppBar, Box, Button, Container, Paper, Toolbar } from '@mui/material';

import { useEffect, useState } from 'react';
import AboutPage from '../../src/components/AboutPage';
import HomePage from '../../src/components/HomePage';
import Play from '../../src/components/Play';
import ScrumPage from '../../src/components/ScrumPage';
import { PageItem } from './types';

export default function Home() {
	const [page, setPage] = useState<PageItem>({
		title: 'Inicio',
		pageComponent: <></>,
	});
	useEffect(() => {
		setPage({
			title: 'Inicio',
			pageComponent: <HomePage onPageChange={setPage} />,
		});
	}, []);

	const pages: PageItem[] = [
		{ title: 'Jogar', pageComponent: <Play /> },
		{ title: '+ Scrum', pageComponent: <ScrumPage /> },
		{ title: 'Sobre', pageComponent: <AboutPage /> },
	];

	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Box
				sx={{
					width: '90%',
					height: '90%',
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'center',
					flexDirection: 'column',
				}}>
				<Box
					sx={{
						width: '100%',
						height: 'auto',
						display: 'flex',
						alignItems: 'flex-start',
						justifyContent: 'center',
					}}>
					<AppBar position="static">
						<Container maxWidth="xl">
							<Toolbar disableGutters>
								<Button
									key={page.title}
									onClick={() => {
										setPage({
											title: 'Início',
											pageComponent: <HomePage onPageChange={setPage} />,
										});
									}}
									sx={{
										mr: 2,
										display: { xs: 'flex', md: 'flex' },
										fontWeight: 700,
										fontSize: '16px',
										color: '#FFF',
										letterSpacing: '.3rem',
									}}>
									<Box sx={{ color: '#333333' }}>Scrum</Box> Simulator
								</Button>
								<Box
									sx={{
										flexGrow: 1,
										display: { xs: 'flex', md: 'flex' },
										justifyContent: 'flex-end',
									}}>
									{pages.map((page) => (
										<Button
											key={page.title}
											onClick={() => {
												setPage(page);
											}}
											sx={{
												my: 2,
												color: '#333333',
												display: 'block',
												width: '100px',
											}}>
											{page.title}
										</Button>
									))}
								</Box>
							</Toolbar>
						</Container>
					</AppBar>
				</Box>

				<Box
					sx={{
						width: '100%',
						minHeight: '80vh',
						height: 'fit-content',
						display: 'flex',
						alignItems: 'flex-start',
						justifyContent: 'center',
					}}>
					<Paper
						elevation={5}
						square
						sx={{
							width: '100%',
							height: 'auto',
							display: 'flex',
							minHeight: '80vh',
							alignItems: 'center',
							justifyContent: 'center',
							padding: '5rem',
						}}>
						{page.pageComponent}
					</Paper>
				</Box>
			</Box>
		</Box>
	);
}
