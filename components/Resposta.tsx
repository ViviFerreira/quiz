import RespostaModel from '@/model/resposta';
import style from '@/styles/Resposta.module.css';

interface RespostaProps {
	valor: RespostaModel;
	indice: number;
	letra: string;
	corFundoLetra: string;
	respostaFornecida: (indice: number) => void;
}

export default function Resposta(props: RespostaProps) {
	const resposta = props.valor;
	const revelada = resposta.revelada ? style.revelada : '';

	return (
		<div
			className={style.resposta}
			onClick={() => props.respostaFornecida(props.indice)}
		>
			<div className={`${style.conteudoResposta} ${revelada}`}>
				<div className={style.frente}>
					<div
						className={style.letra}
						style={{ backgroundColor: props.corFundoLetra }}
					>
						{props.letra}
					</div>
					<div className={style.valor}>{resposta.valor}</div>
				</div>

				<div className={style.verso}>
					{resposta.certa ? (
						<div className={style.certa}>
							<div>A resposta certa é...</div>
							<div className={style.valor}>{resposta.valor}</div>
						</div>
					) : (
						<div className={style.errada}>
							<div>A resposta informada esta errada...</div>
							<div className={style.valor}>{resposta.valor}</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
