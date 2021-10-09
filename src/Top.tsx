import React from 'react'
import { Box, Button, Center } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import storeJson from './store.json'
import { Link } from 'react-router-dom'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: storeJson,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const Top = () => {
  return (
    <>
      <Box m={8}>
        <Lottie options={defaultOptions} height={320} width={320} />
      </Box>
      <Center h={150}>
        <Link to="/search">
          <Button bg="teal.300" size="md" align="center" color="white" w={175}>
            現在地から探す
          </Button>
        </Link>
      </Center>
      <Center>
        <Button
          bg="teal.300"
          size="md"
          align="center"
          color="white"
          w={175}
          disabled
        >
          場所指定して探す
        </Button>
      </Center>
    </>
  )
}
