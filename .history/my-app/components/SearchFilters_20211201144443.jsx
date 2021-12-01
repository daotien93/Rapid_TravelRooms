import { useState, useEffect } from 'react'
import { Flex, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { filterData, getFilterValues } from '../../utils/filterData'

const SearchFilter = () => {
    const [filters, setFilters] = useState(filterData)

    return (
        <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
            {
                filters.map(filter => (
                    <Box key={filter.queryName}>

                    </Box>
                ))
            }
        </Flex>
    )
}

export default SearchFilter