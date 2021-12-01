import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = ({ purpose }) => {
  <Flex flexWrap='wrap' justifyContent='center'  alignItems='center'>
        { purpose }
  </Flex>
}

export default function Home() {
  return (
    <div>
      <h1>My Hotel App</h1>
      <Banner/>
    </div>
  )
}
