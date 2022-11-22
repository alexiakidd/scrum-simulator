import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useState } from 'react';
import hotPotatoes from '../../../public/assets/hot_potatoes.png';
export default function Play() {
	const playMode = [
		{
			mode: 'JCloze',
			page: (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Typography variant="h3">JCloze - Scrum</Typography>
					<iframe
						width="800px"
						height="800px"
						src="resource/sentenca_jcloze.htm"></iframe>
				</Box>
			),
		},
		{
			mode: 'JQuiz',
			page: (
				<Box
					sx={{
						width: '80%',
						height: '80%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Typography variant="h3">JQuiz - Scrum</Typography>
					<iframe
						width="800px"
						height="800px"
						src="resource/quiz_scrum.htm"></iframe>
				</Box>
			),
		},
	];
	const [mode, setMode] = useState({
		mode: '',
		page: (
			<>
				<Box sx={{ width: '80%', height: '80%' }}>
					<Typography variant="h3">Escolha um desafio </Typography>
					<Typography sx={{ mt: 2 }}>
						Escolha um desafio do Hot Potatoes para praticar seus conhecimentos
						de Scrum
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
						{playMode.map((playMode) => (
							<Button
								variant="contained"
								size="large"
								key={playMode.mode}
								onClick={() => {
									setMode({ mode: playMode.mode, page: playMode.page });
								}}>
								{playMode.mode}
							</Button>
						))}
					</Box>
				</Box>
			</>
		),
	});

	return <>{mode.page}</>;
}
