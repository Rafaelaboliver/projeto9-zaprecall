import { useState } from "react";
import styled from 'styled-components';
import deck from '../constants/deck';
import seta_virar from '../assets/seta_virar.png';
import seta_play from '../assets/seta_play.png';
import icone_certo from '../assets/icone_certo.png';
import icone_quase from '../assets/icone_quase.png';
import icone_erro from '../assets/icone_erro.png';
import { CORVERMELHA, CORAMARELA, CORVERDE, CORCINZA } from '../constants/cores';


export default function PerguntasDeck(props) {
    const { contador, setContador } = props;
    return (
        <div>
            {deck.map((cartao) => (
                <PerguntaUnitaria
                    key={cartao.posicao}
                    cartao={cartao}
                    contador={contador}
                    setContador={setContador}>
                    <p></p>
                    <img src={seta_play} alt='seta_play' />
                </PerguntaUnitaria>
            ))
            }
        </div>
    )
}

function PerguntaUnitaria(props) {
    const { cartao, contador, setContador } = props;

    /*useStates que irei utilizar nas funções de quando a pergunta fechada for clicada, mostrar pergunta aberta e mostrar a resposta com os
    botões*/

    const [perguntaFClicada, setPerguntaFClicada] = useState(false);
    const [perguntaAberta, setPerguntaAberta] = useState(false);
    const [statusIcone, setStatusIcone] = useState('play');

    /*Lógica das funções:
        => Inicia como false, ou seja, fase seguinte desativada. SE clicado: ativa a próxima etapa. SENÃO: apenas o estado inicial
        dessa etapa é mostrado.

        => Para a pergunta ser aberta anpenas uma ÚNICA vez:
        Se a pergunta AINDA não foi clicada: ela pode receber true. SE já foi clicada: esse estado recebe false e nenhuma fase
        posterior será ativada. 
    */

    function fechadaClicada() {
        if (!perguntaAberta) {
            setPerguntaFClicada(true);
        } else {
            setPerguntaFClicada(false);
        };
    }

    function abertaClicada() {
        setPerguntaAberta(true);
    }

    function selecionandoBotao(status) {
        setPerguntaFClicada(false);
        setContador(contador + 1);
        setStatusIcone(status); 
    }


    function fechandoPergunta() {

        switch(statusIcone) {
            case 'erro':
                return icone_erro;
            case 'quase':
                return icone_quase;
            case 'zap':
                return icone_certo;
            default:
                return seta_play;
            }
    }

    if (!perguntaFClicada) {
        return (
            <div data-test="flashcard">
                <PerguntaFechada
                    key={deck.posicao}
                    status={statusIcone}>
                    <p
                        data-test="flashcard-text"
                        cor={props.cor}>
                        Pegunta {props.cartao.posicao}
                    </p>
                    <img data-test="play-btn" onClick={() => fechadaClicada()} src={fechandoPergunta()} alt='icone do cartão' />
                </PerguntaFechada>
            </div>
        );
    } else if (!perguntaAberta) {
        return (
            <div>
                <PerguntaAberta
                    key={deck.posicao}>
                    <p data-test="flashcard-text">{props.cartao.pergunta}</p>
                    <PerguntaAbertaI data-test="turn-btn" onClick={() => abertaClicada()} src={seta_virar} alt='seta_virar' />
                </PerguntaAberta>
            </div>
        );
    } else {
        return (
            <div>
                <PerguntaAberta
                    key={deck.posicao}>
                    <p data-test="flashcard-text">{props.cartao.resposta}</p>
                    <Botoes>
                        <BotaoVermelho data-test="no-btn" onClick={() => selecionandoBotao('erro')}>Não lembrei</BotaoVermelho>
                        <BotaoAmarelo data-test="partial-btn" onClick={() => selecionandoBotao('quase')}>Quase não lembrei</BotaoAmarelo>
                        <BotaoVerde data-test="zap-btn" onClick={() => selecionandoBotao('zap')}>Zap!</BotaoVerde>
                    </Botoes>
                </PerguntaAberta>
            </div>
        );
    }
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
  text-decoration: ${props => props.status === 'play' ? 'none' : 'line-through'};
  color: ${props => {
        switch (props.status) {
            case 'erro':
                return CORVERMELHA;
            case 'quase':
                return CORAMARELA;
            case 'zap':
                return CORVERDE;
            default:
                return CORCINZA;
        }
    }};
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
const Botoes = styled.div`
 
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`