import React from 'react';
import styled from 'styled-components'; //css를 적용할 때는 {css}

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" :
    "transparent"};
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: ${props => props.primary ? "white" :
    "palevioletred"};
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    text-decoration: none; 
`;

const SibalButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

const Container = styled.div`
    text-align: center;
`

const ReversedButton = props => <Button {...props} children=
{props.children.split('').reverse()}/>

function ButtonOne() {
return(
    <div className="ButtonOne">
    <Container>
        <Button>그냥 버튼</Button> 
        <Button as="a" href="http://master.fordate.org/#/" primary>프라이머리</Button> 
        <SibalButton as="a" href="https://form.yonja.co.kr/">시발 버튼</SibalButton>
        <Button as={ReversedButton}>거꾸로 버튼</Button>
    </Container>
    </div>
    )
}

export default ButtonOne; // export를 할 때는 함수로 한다. 그리고 마지막에 함수는 return(<div>)로 해주자.