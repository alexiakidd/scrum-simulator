import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import hotPotatoes from '../../../public/assets/hot_potatoes.png';
export default function Play() {
	const playMode = ['JCloze', 'JQuiz'];
	return (
		<Box sx={{ width: '80%', height: '80%' }}>
			<Typography variant="h3">Escolha um desafio </Typography>
			<Typography sx={{ mt: 2 }}>
				Escolha um desafio do Hot Potatoes para praticar seus conhecimentos de
				Scrum
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					marginTop: '1rem',
					width: '100%',
				}}>
				<Image src={hotPotatoes} alt="hot-potatoes" />
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
					marginTop: '5rem',
					width: '100%',
				}}>
				{playMode.map((mode) => (
					<Button
						variant="contained"
						size="large"
						key={mode}
						onClick={() => {}}>
						{mode}
					</Button>
				))}
			</Box>
		</Box>
	);
}
