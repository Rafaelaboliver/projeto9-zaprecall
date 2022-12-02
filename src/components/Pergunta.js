import Deck from "./Deck"
import seta_play from '../assets/seta_play.png';
import seta_virar from '../assets/seta_virar.png';
import styled from 'styled-components'

export default function Pergunta() {
    return (
        <div>
            {Deck.map(desafio => (
                <PerguntaFechada>
                    <PerguntaFechadaP
                        key={desafio.posicao}
                    >
                        Pergunta {desafio.posicao}
                    </PerguntaFechadaP>
                    <img src={seta_play} alt='seta_play' />
                </PerguntaFechada>
            ))
            }
        </div>
    )
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
`

const PerguntaFechadaP = styled.p`
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`