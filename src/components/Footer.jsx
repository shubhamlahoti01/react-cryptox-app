import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
      bgColor={'blackAlpha.900'}
      color={'whiteAlpha.700'}
      minH={'48'}
      px={'16'}
      py={['16', '8']}
    >
      <Stack direction={['column', 'row']} h='full' alignItems={'center'}>
        <VStack w='full' alignItems={['center', 'flex-start']}>
          <Text fontWeight={'bold'}>About Us</Text>
          <Text
            fontSize={'sm'}
            letterSpacing='widest'
            textAlign={['center', 'left']}
          >
            We are the best crypto trading app in India, we provide detail
            knowledege and guidance at a very resonable price.
          </Text>
        </VStack>
        <VStack>
          <Avatar
            boxSize={'28'}
            mt={['4', '0']}
            src={
              'https://media.licdn.com/dms/image/C4D03AQFYcheSxuHtYw/profile-displayphoto-shrink_800_800/0/1661499684645?e=1679529600&v=beta&t=Qp1hq1O7qafKwP02gK1ZArQ9xX4E7w_6_nXhSgN2Trg'
            }
          />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
