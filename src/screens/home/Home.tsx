import {View, Text, Image} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const ProfileImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 100px;
`;

const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Container = styled.View`
  background-color: ${({theme}) => theme.blue};
  width: 100%;
  height: 120px;
  justify-content: center;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <Title>Crypto Tracker Pro</Title>
      <ProfileImage source={require('../../assets/img/user.png')} />
    </Container>
  );
};

export default Home;
