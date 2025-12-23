import Estatistica from '@/components/Estatistica';
import styles from '../styles/Resultado.module.css';
import { useRouter } from 'next/router';
import Botao from '@/components/Botao';

export default function resultado() {
	const router = useRouter();

	const total = Number(router.query.total!);
	const certas = Number(router.query.certas!);
	const percentual = Math.round((certas / total) * 100);

	return (
		<div className={styles.resultado}>
			Resultado Final
			<div style={{ display: 'flex' }}>
				<Estatistica valor={total} texto='Perguntas' />
				<Estatistica valor={certas} texto='Certas' corFundo='#9CD2A4' />
				<Estatistica
					valor={`${percentual}%`}
					texto='Percentual'
					corFundo='#DE6A33'
				/>
			</div>
			<Botao href='/' texto='Tentar Novamente' />
		</div>
	);
}
