import FaceIcon from '@mui/icons-material/Face';
import Face2Icon from '@mui/icons-material/Face2';
import { Avatar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

import ccby from '../../../public/assets/ccby.png';
export default function AboutPage() {
	const team = [
		{ name: 'Alessandra Lima', icon: <Face2Icon /> },
		{ name: 'Andressa Pereira', icon: <Face2Icon /> },
		{ name: 'Jhoan Victor', icon: <FaceIcon /> },
		{ name: 'Luis Gabriel', icon: <FaceIcon /> },
		{ name: 'Mayla Nascimento', icon: <Face2Icon /> },
	];
	return (
		<Box
			sx={{
				width: '80%',
				height: '80%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
			}}>
			<Typography variant="h3">Sobre</Typography>
			<Typography sx={{ mt: 2 }}>
				O REA &apos;Scrum Simulator&apos; foi desenvolvido em 2022 para
				disciplina de &apos;Informática da Educação&apos; da Professora Salete
				Farias, do curso de Sistemas de Informação do Instituto Federal do
				Maranhão.
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
					marginTop: '1rem',
					width: '100%',
				}}>
				<Typography variant="h6">Feito por:</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'flex-start',
					justifyContent: 'space-around',
					width: '100%',
				}}>
				{team.map((teamMate) => (
					<Box
						key={teamMate.name}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: '1rem',
							textAlign: 'center',
						}}>
						<Avatar>{teamMate.icon}</Avatar>
						<Typography sx={{ mt: 2 }}>{teamMate.name}</Typography>
					</Box>
				))}
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
					marginTop: '2rem',
					width: '100%',
				}}>
				<Typography variant="h6">Licença:</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
					marginTop: '1rem',
					width: '100%',
				}}>
				<Link rel="license" href="http://creativecommons.org/licenses/by/4.0/">
					<Image
						alt="Licença Creative Commons"
						width="0"
						height="0"
						src={ccby}
					/>
				</Link>

				<Typography>Este obra está licenciado com uma Licença</Typography>
				<Link rel="license" href="http://creativecommons.org/licenses/by/4.0/">
					Creative Commons Atribuição 4.0 Internacional.
				</Link>
			</Box>
		</Box>
	);
}
