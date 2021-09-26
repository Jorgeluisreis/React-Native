import React, { useState, useEffect } from 'react';

import {
  Container,
  Title,
  NumberValue,
  ButtonContainer,
  Button,
  ButtonText,
} from './styles'

export default ({ inicial = 0, passo = 0 }) => {
  const [numero, setNumero] = useState(inicial);
  const [emoji, setEmoji] = useState('😀')
  const [greeting, setGreeting] = useState('')

  function inc() {
    setNumero(numero + passo);
  }

  function dec() {
    setNumero(numero - passo);
  }

  useEffect(() => {
    if (numero >= 1 && numero < 10) {
      setEmoji('😄')
    } else if (numero >= 10 && numero < 15) {
      setEmoji('😁')
    } else if (numero >= 15) {
      setEmoji('😆')
    } else if (numero < 0) {
      setEmoji('🤬')
    }
  }, [numero])

  useEffect(() => {
    const horaAtual = new Date().getHours() + 10
    
    if (horaAtual > 0  && horaAtual < 6) {
      setGreeting('Boa madrugada')
    }  else if (horaAtual > 6  && horaAtual < 18) {
      setGreeting('Bom Dia')
    } else if (horaAtual > 12  && horaAtual < 18) {
      setGreeting('Boa tarde')
    } else {
      setGreeting('Boa noite')
    }
  }, [])

  return (
    <Container>
      <Title>{greeting}! {emoji}</Title>

      <NumberValue numero={numero}>{numero}</NumberValue>

      <ButtonContainer>
        <Button onPress={dec} activeOpacity={0.7}>
          <ButtonText>-</ButtonText>
        </Button>

        <Button onPress={inc} activeOpacity={0.7}>
          <ButtonText>+</ButtonText>
        </Button>
      </ButtonContainer>

    </Container>
  );
};
