import Deck from "./Deck"
import seta_play from '../assets/seta_play.png';
import seta_virar from '../assets/seta_virar.png';
import styled from 'styled-components'
import { useState } from "react";

export default function Pergunta(props) {
  const {respostaRevelada, setRespostaRevelada} = props;
  const deck = Deck;
  console.log(deck);


  //irie utilizar na função de quando a pergunta fechada for clicada, mostrar pergunta aberta e mostrar a resposta
  const [perguntaFClicada, setPerguntaFClicada] = useState([]);
  const [perguntaAberta, setPerguntaAberta] = useState([]);
  
  function FechadaClicada(verifica) {
    const novoFechada = [...perguntaFClicada, deck.posicao];
    console.log('variavel', verifica)

    /*  //verificar se a pergunta fechada está na lista de clicadas - para receber apenas uma vez
        //=> deve filtrar esse cartão dentro do array
    //SENÃO
      //=> adicionar o cartão dentro do  novo array*/

    perguntaFClicada.includes(deck.posicao) ? setPerguntaFClicada(perguntaFClicada.filter((p) => p !== deck.posicao))
      : setPerguntaFClicada(novoFechada);
  }

  function AbertaClicada() {
    const novaAberta = [...perguntaAberta, deck.pergunta];
    console.log('aberta', novaAberta);

    perguntaAberta.includes(deck.pergunta) ? setPerguntaAberta(perguntaAberta.filter((p) => p !== deck.pergunta))
      : setPerguntaAberta(novaAberta);
  }

  /*function RespostaEscolhida (escolha) {
    const novaResposta = [...respostaRevelada, escolha.resposta];
    
    respostaRevelada.includes(escolha.resposta) ? setRespostaRevelada(respostaRevelada.filter((r) => r !== escolha.resposta))
      : setPerguntaAberta(novaResposta);
  }*/

  if (!perguntaFClicada.includes(deck.posicao)) {
    return (
      <div>
       
          <PerguntaFechada
            key={deck.posicao}>
            <p> Pergunta {deck.posicao}</p>
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

  if (!respostaRevelada.includes(deck.resposta)){
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
       ))
      }
      </div>
    )
  }

  return (
    <div>
      {Deck.map((cartao) => (
        <PerguntaFechada
          key={cartao.posicao}>
          <p></p>
          <img onClick={()=>FechadaClicada(cartao)} src={seta_play} alt='seta_play' />
        </PerguntaFechada>
      ))
      }
    </div>
  );

}

//saber qual pergunnta foi clicada e adicionar ela a lista de perguntas fechada clicadas


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