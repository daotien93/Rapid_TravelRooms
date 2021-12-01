import Head from 'next/head'
import { Box } from '@chakra-ui/react'

const Layout = ({ children }) => (
    <>
        <Head>
            <title>React Estate</title>
        </Head>
        <Box maxWidth='1280px' m='auto'>
            <header>
                Navbar
            </header>
            <main>
                {children}
            </main>
        </Box>
    </>
)