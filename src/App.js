import styled from 'styled-components'
import { useState } from 'react';
import Logo from './components/Logo';
import PerguntasDeck from './components/PerguntasDeck';
import Footer from './components/Footer';
//import Pergunta from './components/Pergunta';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <ScreenContainer>
      <Logo/>
      <PerguntasDeck 
      contador={contador}
      setContador={setContador}
      />
      <Footer 
      contador={contador}/>
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

