import { Center, Flex, Icon, Td, Text, Tr } from '@chakra-ui/react';
import * as React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { xpTableType } from '../../../interfaces/xpTable';
import CustomTag from '../../HOC/Tag.HOC';
import MedalSVG from '../../Logo/MedalSVG';
import { ExpandedRow } from './ExpandedRow';
import GraphColumn from './GraphColumn';
import RowCategories from './RowCategories';

type propTypes = {
  row: xpTableType;
  index: number;
  searching: boolean;
};

const TableRow = ({ row, index, searching }: propTypes) => {
  const [expandRow, setExpandRow] = React.useState(false);
  return (
    <>
      <Tr
        bg={expandRow ? 'superteamBlack.800' : ''}
        _hover={{
          background: 'superteamBlack.800',
        }}
        onClick={() => {
          setExpandRow((prevState) => !prevState);
        }}
        cursor={'pointer'}
        borderBottom="1px solid"
        borderColor="superteamBlack.200"
      >
        <Td cursor="" width="2rem" padding="24px">
          <div>
            {index + 1 <= 3 ? (
              searching ? (
                ` ${index + 1}.`
              ) : (
                <MedalSVG index={index + 1} />
              )
            ) : (
              ` ${index + 1}.`
            )}
          </div>
        </Td>
        <Td padding="18px">
          <Text
            color={'superteamWhite'}
            fontSize={'14px'}
            textTransform="capitalize"
          >
            {row.name.split('#')[0]}
          </Text>
          <Text color="superteamGray.500" fontSize={'12px'}>
            {row.name}
          </Text>
        </Td>
        <Td>
          <Flex h={10} flexDir="row" gap="0.4rem">
            <Text color={'superteamWhite'} fontSize={'14px'}>
              {Math.round(row.total_xp)}
            </Text>
            <CustomTag colorScheme={'superteamGray'} text="XP" />
          </Flex>
        </Td>
        <Td>
        <GraphColumn /> 
        </Td>
        <Td>
          <RowCategories row={row} />
        </Td>
        <Td>
          <Center
            rounded={'full'}
            transition="background 0.4s ease"
            _hover={{
              background: 'superteamBlack.700',
            }}
          >
            <Icon
              cursor={'pointer'}
              as={FiChevronDown}
              w={6}
              h={6}
              color={'superteamGray.600'}
            />
          </Center>
        </Td>
      </Tr>
      <ExpandedRow expandRow={expandRow} row={row} />
    </>
  );
};

export default TableRow;