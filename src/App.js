import styled from 'styled-components'
import Pergunta from './components/Pergunta';
import Deck from './components/Deck';
import Footer from './components/Footer';
import Logo from './components/Logo';

export default function App() {

  return (
    <div className="screen-container">
      <Logo/>
      <Pergunta/>
      <Footer/>
    </div>
  );
}


