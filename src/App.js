import styled from 'styled-components'
import Pergunta from './components/Pergunta';
import Deck from './components/Deck';
import Footer from './components/Footer';

export default function App() {

  return (
    <div className="screen-container">
      <Pergunta/>
      <Deck/>
      <Footer/>
    </div>
  );
}


