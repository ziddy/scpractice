import React from 'react';
import './App.css';
import styled from 'styled-components';
import ButtonOne from './ButtonOne'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;



function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>내 이름은 눈물의 요정</Title>
        <ButtonOne/>
      </Wrapper>
      
    </div>
  );
}

export default App;
