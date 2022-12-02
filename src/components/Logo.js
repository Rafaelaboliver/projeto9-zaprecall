import logo from '../assets/logo.png'
import styled from 'styled-components'

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImagem src={logo} alt="logo" />
            <LogoTexto>ZapRecall</LogoTexto>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
`

const LogoImagem = styled.img`
width: 52px;
`

const LogoTexto = styled.h1`
 font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
`