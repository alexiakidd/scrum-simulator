import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import scrum from '../../../public/assets/scrum_process.svg';
export default function ScrumPage() {
	return (
		<Box sx={{ width: '80%', height: '80%' }}>
			<Typography variant="h3">Conheça o Scrum!</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '1rem',
					width: '100%',
					height: '100%',
				}}>
				<Typography variant="body1">
					O Scrum é um framework de gerenciamento de projetos, da etapa da
					organização ao desenvolvimento ágil de produtos complexos e
					adaptativos buscando o valor máximo, criado na década de 1990. No
					State of Agile Report de 2021, o scrum era a metodologia ágil mais
					utilizada, sendo adotada por 66% dos participantes do relatório.
					Embora muito utilizado por equipes de desenvolvimento de software, os
					princípios desse conjunto podem ser aplicados a todos os tipos de
					trabalhos em equipe. Em função de não ser linear, pode empregar vários
					outros processos ou técnicas, de modo que você possa melhorá-los.
				</Typography>
				<Typography variant="body1">
					Também não é um processo prescritivo, ou seja, não descreve o que
					fazer em cada situação, pois em trabalhos complexos é impossível
					predizer tudo o que irá ocorrer. É um conjunto de valores, princípios
					e práticas que fornecem a base para que a sua organização adicione
					suas práticas particulares de engenharia e gestão e que sejam
					relevantes para a realidade da sua empresa. O resultado será uma
					versão de Scrum que é exclusivamente sua. Scrum possui seu foco no
					gerenciamento e projeto da organização onde é difícil planejar à
					frente. Mecanismos do Controle de Processo Empírico, onde ciclos de
					feedback constituem o núcleo da técnica de gerenciamento que são
					usadas em oposição ao tradicional gerenciamento de comando e controle.
					É uma forma de planear e gerenciar projetos trazendo a autoridade da
					tomada de decisão a níveis de propriedade de operação e certeza.
					Apesar da palavra não ser um acrônimo, algumas empresas que
					implementam o processo a soletram com letras maiúsculas como
					SCRUM.Isto pode ser devido aos primeiros artigos de Ken Schwaber que
					capitalizava SCRUM no título. Apesar de ser criado para gerenciamento
					de projetos de software, também pode ser utilizado em equipes de
					manutenção de software ou como uma abordagem geral de gerenciamento de
					projetos/programas. Atualmente, as técnicas de DevOps são utilizados
					por programadores no desenvolvimento de software em conjunto com
					técnicas de gestão e desenvolvimento ágil de software, como o Scrum.
				</Typography>

				<Image src={scrum} width={600} alt="scrum-process" />

				<Typography sx={{ mt: 2 }} variant="caption">
					Referência: Scrum. https://pt.wikipedia.org/wiki/Scrum, Acessado em:
					21/11/2022 ás 20:28
				</Typography>
			</Box>
		</Box>
	);
}
