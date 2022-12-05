import styled from 'styled-components'
import Footer from './components/Footer';
import Logo from './components/Logo';
import { useState } from 'react';
import PerguntasDeck from './components/PerguntasDeck';
//import Pergunta from './components/Pergunta';

export default function App() {
  const [respostaRevelada, setRespostaRevelada] = useState([]);
  const [contador, setContador] = useState(0);

  return (
    <ScreenContainer>
      <Logo/>
      <PerguntasDeck 
      key={respostaRevelada}
      respostaRevelada = {respostaRevelada}
      setRespostaRevelada = {setRespostaRevelada}
      contador={contador}
      setContador={setContador}
      />
      <Footer 
      contador={contador}
      respostaRevelada={respostaRevelada}/>
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`

