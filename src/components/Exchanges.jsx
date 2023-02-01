import React, { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.headers.get['Accepts'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

import { server } from '../index';
import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
//         const { data } = await axios.get(`${server}/exchanges`);
        const { data } = await axios.get('https://api.coingecko.com/api/v3/exchanges');
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);
  if (error) {
    return <ErrorComponent message={'Error WhileFetching Exchanges'} />;
  }
  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'} justifyContent='space-evenly'>
            {exchanges.map((i) => (
              <ExchangeCard
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
                key={i.id}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={'blank'}>
    <VStack
      w='52'
      shadow='lg'
      p='8'
      borderRadius={'lg'}
      transition={'all 0.3s'}
      m='4'
      css={{
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Image src={img} w='10' h='10' objectFit={'contain'} alt='Exchange' />
      <Heading size={'md'} noOfLines='1'>
        {rank}
      </Heading>
      <Text noOfLines={'1'}>{name}</Text>
    </VStack>
  </a>
);
