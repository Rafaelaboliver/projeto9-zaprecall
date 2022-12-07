import styled from 'styled-components'
import deck from '../constants/deck';

export default function Footer(props){
    const {contador} = props;

    return (
        <FooterConcluidos>
            <h1 data-test="footer">{contador}/{deck.length} CONCLUÍDOS</h1>
        </FooterConcluidos>
    )
}

const FooterConcluidos = styled.div`
 width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`