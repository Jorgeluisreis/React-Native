import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #191a1a;
`;

export const Title = styled.Text`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #fff;
`;

export const NumberValue = styled.Text`
    font-size: 48px;
    font-weight: bold;
    color: ${({numero}) => () => {
        if (numero < 0) {
            return '#e62e2e'
        } else if (numero > 0) {
            return '#1556bf'
        } else {
            return 'white'
        }
    }}
`

export const ButtonContainer = styled.View`
    flex-direction: row;
    margin-top: 20px;
    
`

export const Button = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: blue;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`;

export const ButtonText = styled.Text`
    font-size: 30px;
    color: #fff;
`;