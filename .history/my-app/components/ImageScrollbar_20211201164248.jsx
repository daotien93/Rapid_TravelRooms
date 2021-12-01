import { useContext } from 'react'
import Image from 'next/image'
import { Box, Icon, Flex } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const LeftArrow = () => {
    const { scrollPev } = useContext(VisibilityContext)
    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPev}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}

export default LeftArrow
 
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)
    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}

export default RightArrow
const ImageScrollbar = ({data}) => (
    <ScrollMenu LeftArrow={leftArrow} RightArrow={rightArrow} style={{overflow: 'hidden'}}>
        {
            data.map((item) => (
                <Box
                    width='919px'
                    key={item.id}
                    itemId={item.id}
                    overflow='hidden'
                >
                    <Image
                        placeholder='blur'
                        blurDataURL={item.url}
                        src={item.url}
                        width={1000}
                        height={500}
                        sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" 
                    />
                </Box>
            ))    
        }
    </ScrollMenu>
)

export default ImageScrollbar

