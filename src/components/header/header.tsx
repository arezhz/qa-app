'use client'
import styles from './header.module.css'
import {Heading} from "@chakra-ui/react";

export default function Header() {
    return (
        <header className={styles.header}>
            <Heading as='h1'>
                (2xl) In love with React & Next
            </Heading>
        </header>
    )
}