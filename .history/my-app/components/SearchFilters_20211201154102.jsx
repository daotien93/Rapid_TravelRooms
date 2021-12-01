import { useState, useEffect } from 'react'
import { Flex, Box, Text, Input, Spinner, Icon, Button, Select } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { filterData, getFilterValues } from '../../utils/filterData'

const SearchFilter = () => {
    const [filters, setFilters] = useState(filterData)
    const searchProperties = (filterValues) => {

    }
    return (
        <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
            {
                filters.map(filter => (
                    <Box key={filter.queryName}>
                        <Select
                            placeholder={filter.placeholder}
                            w='fit-content'
                            p='2'
                            onChange={(e) => searchProperties({[filter.queryName] : e.target.value})
                        }>
                        {
                                filter?.item?.map((item) => (
                                    <option value={ item.value}>
                                        
                                    </option>
                            ))
                        }
                        </Select>
                    </Box>
                ))
            }
        </Flex>
    )
}

export default SearchFilter