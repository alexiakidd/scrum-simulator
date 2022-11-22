import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import img from '../../../public/assets/quizImg.svg';
import Play from '../Play';
import { HomePageProps } from './types';

export default function HomePage({ onPageChange }: HomePageProps) {
	return (
		<>
			<Grid
				spacing={2}
				container
				width="100%"
				height="100%"
				direction="row"
				justifyContent="space-between"
				alignItems="center">
				<Grid item sm={12} md={12} lg={6} xl={6}>
					<Typography variant="h2">Teste seus </Typography>
					<Typography variant="h2" component="strong" sx={{ color: '#FCC822' }}>
						conhecimentos
					</Typography>
					<Typography variant="h2">em nossos desafios</Typography>
					<Box sx={{ marginTop: '1rem' }}>
						<Button
							variant="contained"
							onClick={() => {
								onPageChange({ title: 'Jogar', pageComponent: <Play /> });
							}}>
							Começar a resolver
						</Button>
					</Box>
				</Grid>
				<Grid item sm={12} md={12} lg={6} xl={6}>
					<Image width={500} alt="People with questions" src={img} />
				</Grid>
			</Grid>
		</>
	);
}
