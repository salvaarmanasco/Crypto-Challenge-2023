import React, {useEffect} from 'react';
import CryptoList from './components/CryptoList';
import Header from './components/Header';
import axios from 'axios';
import AddButton from './components/AddButton';

const Home = () => {
  return (
    <>
      <Header />
      <CryptoList />
      <AddButton />
    </>
  );
};

export default Home;
