import { useState } from "react";
import styled from 'styled-components';
import seta_play from '../assets/seta_play.png';
import seta_virar from '../assets/seta_virar.png';
import deck from "./deck";

export default function PerguntasDeck(props) {

    return (
        <div>
            {deck.map((cartao) => (
                <PerguntaUnitaria
                    key={cartao.posicao}>
                    <p></p>
                    <img src={seta_play} alt='seta_play' />
                </PerguntaUnitaria>
            ))
            }
        </div>
    )
}

function PerguntaUnitaria(props) {
    const { respostaRevelada, setRespostaRevelada } = props;

    /*useStates que irei utilizar nas funções de quando a pergunta fechada for clicada, mostrar pergunta aberta e mostrar a resposta com os
    botões*/

    const [perguntaFClicada, setPerguntaFClicada] = useState([]);
    const [perguntaAberta, setPerguntaAberta] = useState([]);

    /*Lógica das funções:
        verificar se o ítem está na lista de clicadas - para receber apenas uma vez
            deve filtrar esse cartão dentro do array
        SENÃO
            adicionar o cartão dentro do  novo array
    */

    function FechadaClicada(recebe) {
        const novoFechada = [...perguntaFClicada, recebe.posicao];
        console.log('BATATA parâmetro', recebe);
        console.log('BATATA useState', perguntaFClicada);
        console.log('BATATA novoArray', perguntaFClicada);

        perguntaFClicada.includes(recebe.posicao) ? setPerguntaFClicada(perguntaFClicada.filter((p) => p !== recebe.posicao))
            : setPerguntaFClicada(novoFechada);
    }

    function AbertaClicada(recebe) {
        const novaAberta = [...perguntaAberta, recebe.pergunta];
        console.log('CHUCHU parâmetro', recebe);
        console.log('CHUCHU useState', perguntaAberta);
        console.log('CHUCHU novoArray', novaAberta);

        perguntaAberta.includes(recebe.pergunta) ? setPerguntaAberta(perguntaAberta.filter((p) => p !== recebe.pergunta))
            : setPerguntaAberta(novaAberta);
    }

    if (!perguntaFClicada.includes(deck.posicao)) {
        return (
            <div>

                <PerguntaFechada
                    key={deck.posicao}>
                    <p> {`Pegunta ${deck.posicao}`}</p>
                    <img onClick={() => FechadaClicada(deck)} src={seta_play} alt='seta_play' />
                </PerguntaFechada>

            </div>
        );
    }

    if (!perguntaAberta.includes(deck.pergunta)) {
        return (
            <div>

                <PerguntaAberta
                    key={deck.posicao}>
                    <p>{deck.pergunta}</p>
                    <PerguntaAbertaI onClick={() => AbertaClicada(deck)} src={seta_virar} alt='seta_virar' />
                </PerguntaAberta>

            </div>
        );
    }

    /*if (!respostaRevelada.includes(deck.resposta)) {
        return (
            <div>

                <PerguntaAberta
                    key={deck.posicao}>
                    <p>{deck.resposta}</p>
                    <Botoes>
                        <BotaoVermelho>Não lembrei</BotaoVermelho>
                        <BotaoAmarelo>Quase não lembrei</BotaoAmarelo>
                        <BotaoVerde>Zap!</BotaoVerde>
                    </Botoes>
                </PerguntaAberta>

            </div>
        )
    }*/

}

const PerguntaFechada = styled.div`
 width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

p{font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}
`

const PerguntaAberta = styled.div`
 width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PerguntaAbertaI = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const BotaoVermelho = styled.button`
 width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: #FF3030;
  border-radius: 5px;
  border: 1px solid #FF3030;
  padding:5px;
`
const BotaoVerde = styled.button`
 width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFF;
  background: #2FBE34;
  border-radius: 5px;
  border: 1px solid #2FBE34;
  padding:5px;
`
const BotaoAmarelo = styled.button`
 width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFF;
  background: #FF922E;
  border-radius: 5px;
  border: 1px solid #FF922E;
  padding:5px;
`

/* vou trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/

const Botoes = styled.div`
 
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`