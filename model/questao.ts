import { embaralhar } from '@/functions/arrays';
import RespostaModel from './resposta';

export default class QuestaoModel {
	#id: number;
	#enunciado: string;
	#respostas: RespostaModel[];
	#acertou: boolean;
	// #respondida: boolean

	constructor(
		id: number,
		enunciado: string,
		resposta: RespostaModel[],
		acertou: boolean = false
	) {
		this.#id = id;
		this.#enunciado = enunciado;
		this.#respostas = resposta;
		this.#acertou = acertou;
	}

	get id() {
		return this.#id;
	}

	get respostas() {
		return this.#respostas;
	}
	get enunciado() {
		return this.#enunciado;
	}
	get acertou() {
		return this.#acertou;
	}

	get respondida() {
		for (let resposta of this.#respostas) {
			if (resposta.revelada) return true;
		}
		return false;
	}

	get naoRespondida() {
		return !this.respondida;
	}

	respostaCom(indice: number): QuestaoModel {
		const acertou = this.#respostas[indice]?.certa;
		const respostas = this.#respostas.map((resposta, i) => {
			const respostaSelecionada = indice === i;
			const deveRevelar = respostaSelecionada || resposta.certa;
			return deveRevelar ? resposta.revelar() : resposta;
		});

		return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou);
	}

	embaralharRespostas(): QuestaoModel {
		let respostasEmbaralhadas = embaralhar(this.#respostas);
		return new QuestaoModel(
			this.#id,
			this.#enunciado,
			respostasEmbaralhadas,
			this.#acertou
		);
	}

	static usandoObjeto(obj: QuestaoModel) : QuestaoModel {

		const respostas = obj.respostas.map(RespostaModel.usandoObjeto);
		return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou);
	}

	paraObjeto() {
		return {
			id: this.#id,
			enunciado: this.#enunciado,
			respostas: this.#respostas.map((resp) => resp.paraObjeto()),
			respondida: this.respondida,
			acertou: this.#acertou,
		};
	}
}
