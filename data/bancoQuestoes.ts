import QuestaoModel from '@/model/questao';
import RespostaModel from '@/model/resposta';

const questoes: QuestaoModel[] = [
	new QuestaoModel(306, 'Qual é o maior planeta do Sistema Solar?', [
		RespostaModel.errada('Terra'),
		RespostaModel.errada('Marte'),
		RespostaModel.errada('Saturno'),
		RespostaModel.certa('Júpiter'),
	]),
	new QuestaoModel(307, 'Quem pintou a obra "Mona Lisa"?', [
		RespostaModel.errada('Michelangelo'),
		RespostaModel.errada('Rafael'),
		RespostaModel.errada('Van Gogh'),
		RespostaModel.certa('Leonardo da Vinci'),
	]),
	new QuestaoModel(308, 'Qual é o país com a maior população do mundo?', [
		RespostaModel.errada('Estados Unidos'),
		RespostaModel.errada('Brasil'),
		RespostaModel.errada('Rússia'),
		RespostaModel.certa('China'),
	]),
	new QuestaoModel(309, 'Quantos continentes existem na Terra?', [
		RespostaModel.errada('Cinco'),
		RespostaModel.errada('Seis'),
		RespostaModel.errada('Oito'),
		RespostaModel.certa('Sete'),
	]),
];

export default questoes;
