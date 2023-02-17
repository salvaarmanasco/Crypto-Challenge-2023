import React, {useEffect} from 'react';
import CryptoList from './components/CryptoList';
import Header from './components/Header';
import axios from 'axios';
import AddButton from './components/AddButton';

const Home = () => {
  useEffect(() => {
    const consultAPI = async () => {
      const url = 'https://data.messari.io/api/v1/assets/btc/metrics';
      const result = await axios.get(url);
      console.log(result);
    };
    consultAPI();
  }, []);

  return (
    <>
      <Header />
      <CryptoList />
      <AddButton />
    </>
  );
};

export default Home;
