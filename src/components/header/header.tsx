'use client'
import styles from './header.module.css'
import {Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {AddIcon, ChevronDownIcon} from "@chakra-ui/icons";

export default function Header() {
    return (
        <header className={styles.header}>
            <Flex alignItems="center" justifyContent="space-between">
                <Heading as='h1'>
                    لیست سوالات
                </Heading>
                <Flex>
                    <Button leftIcon={<AddIcon/>}
                            colorScheme='green'>
                        سوال جدید
                    </Button>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Actions
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