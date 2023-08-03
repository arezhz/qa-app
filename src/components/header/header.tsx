'use client'
import styles from './header.module.css'
import {
    Avatar,
    Button,
    Flex,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text
} from "@chakra-ui/react";
import {AddIcon, TriangleDownIcon} from "@chakra-ui/icons";

export default function Header() {
   const menuButtonFocus = {
        boxShadow: 'none',
    }
    const menuButtonActive = {
        bg: 'transparent',
        borderColor: 'transparent',
    }
    const menuButtonHover ={bg: 'transparent'}

    return (
        <header className={styles.header}>
            <Flex alignItems="center"
                  justifyContent="space-between"
                  height="100%">
                <Heading as='h1' noOfLines={1}>
                    لیست سوالات
                </Heading>
                <Flex alignItems="center"
                      justifyContent="space-between"
                      height="100%">
                    <Button leftIcon={<AddIcon/>}
                            colorScheme='green'
                            me={16}>
                        سوال جدید
                    </Button>
                    <Menu>
                        <MenuButton as={Button}
                                    rightIcon={<TriangleDownIcon/>}
                                    bg='transparent'
                                    _hover={menuButtonHover}
                                    _active={menuButtonActive}
                                    _focus={menuButtonFocus}>
                            <Flex alignItems="center"
                                  justifyContent="space-between">
                                <Avatar name='Hadi zare'
                                        w='44px'
                                        h='44px'
                                        me={3}
                                        src='https://bit.ly/tioluwani-kolawole'/>
                                <Text fontSize='sm'>هادی زارع ایرانی</Text>
                            </Flex>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </header>
    )
}