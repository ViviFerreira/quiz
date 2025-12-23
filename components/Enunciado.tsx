import style from '@/styles/Enunicado.module.css';

interface EnunicadoPropos {
	texto: string;
}

export default function Enunciado(props: EnunicadoPropos) {
	return (
		<div className={style.enunciado}>
			<span className={style.texto}>{props.texto}</span>
		</div>
	);
}
