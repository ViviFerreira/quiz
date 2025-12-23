import Questionario from '@/components/Questionario';
import QuestaoModel from '@/model/questao';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
	const router = useRouter();

	const [idsQuestoes, setIdsQuestoes] = useState<number[]>([]);
	const [questao, setQuestao] = useState<QuestaoModel>();
	const [respostasCertas, setRespostasCertas] = useState<number>(0);

	async function carregarIdsDasQuestao() {
		const resp = await fetch(`${BASE_URL}/questionario`);
		const idDasQuestoes = await resp.json();
		setIdsQuestoes(idDasQuestoes);
	}

	async function carregarQuestao(id: number) {
		const resp = await fetch(`${BASE_URL}/questoes/${id}`);
		const json = await resp.json();
		const novaQuestao = QuestaoModel.usandoObjeto(json);
		setQuestao(novaQuestao);
	}

	useEffect(() => {
		carregarIdsDasQuestao();
	}, []);

	useEffect(() => {
		idsQuestoes.length > 0 && carregarQuestao(idsQuestoes[0]);
	}, [idsQuestoes]);

	function questaoRespondida(questaoRespondida: QuestaoModel) {
		setQuestao(questaoRespondida);
		const acertou = questaoRespondida.acertou;
		setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
	}

	function idProximaQuestao() {
		if (questao?.id === undefined) return undefined;

		const proximoIndice = idsQuestoes.indexOf(questao.id) + 1;
		return idsQuestoes[proximoIndice];
	}

	function proximoPasso() {
		const proximoId = idProximaQuestao();
		proximoId ? irPraProximaQuestao(proximoId) : finalizar();
	}

	function irPraProximaQuestao(proximoId: number) {
		carregarQuestao(proximoId);
	}

	function finalizar() {
		router.push({
			pathname: '/resultado',
			query: {
				total: idsQuestoes.length,
				certas: respostasCertas,
			},
		});
	}
	return questao ? (
		<Questionario
			questao={questao}
			ultima={idProximaQuestao() === undefined}
			questaoRespondida={questaoRespondida}
			proximoPasso={proximoPasso}
		/>
	) : (
		false
	);
}
