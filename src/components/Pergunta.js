import Deck from "./Deck"
import seta_play from '../assets/seta_play.png';
import seta_virar from '../assets/seta_virar.png';

export default function Pergunta() {
    return (
        <div>{Deck.map(desafio => (
            <div className="pergunta-fechada">
                <p
                    key={desafio.posicao}
                >
                    Pergunta {desafio.posicao}
                </p>
                <img src={seta_play} alt='seta_play' />
            </div>
        ))
        }
        </div>
    )
}