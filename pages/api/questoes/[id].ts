import questoes from '../../../data/bancoQuestoes';

export default (req: any, res: any) => {
	const idQuestao = +req.query.id;

	const unicaQuestao = questoes.filter((questao) => questao.id === idQuestao);

	if (unicaQuestao.length === 1) {
		const questSelecionada = unicaQuestao[0].embaralharRespostas();
		res.status(200).json(questSelecionada.paraObjeto());
	} else {
		res.status(204).send();
	}
	res.status(200).json(questoes[0].paraObjeto());
};
