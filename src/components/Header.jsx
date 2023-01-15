import { Button, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack
      p='4'
      shadow={'base'}
      bgColor='blackAlpha.900'
      justifyContent={'space-evenly'}
      alignItems='center'
    >
      <Text
        w='40%'
        fontSize={['2xl', '5xl']}
        textAlign={'center'}
        fontWeight='thin'
        color={'whiteAlpha.700'}
        justifyContent='center'
      >
        Xcrypto
      </Text>
      <HStack alignItems={'center'} w='60%' justifyContent={'space-around'}>
        <Button alignItems={'center'} variant={'unstyled'} color={'white'}>
          <Link to='/'>Home</Link>
        </Button>
        <Button variant={'unstyled'} alignItems={'center'} color={'white'}>
          <Link to='/exchanges'>Exchanges</Link>
        </Button>
        <Button alignItems={'center'} variant={'unstyled'} color={'white'}>
          <Link to='/coins'>Coins</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
