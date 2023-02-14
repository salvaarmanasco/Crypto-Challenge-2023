import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

const Layout = styled.Text`
  color: white;
`;

const Container = styled(View)`
  background-color: #385775;
  width: 100%;
  border: white;
  height: 100px;
  color: white;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <>
      <Container>
        <Layout>Hola</Layout>
      </Container>
      <Text>Hola mundo</Text>
    </>
  );
};

export default App;
