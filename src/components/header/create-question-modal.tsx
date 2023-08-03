import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Heading,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Textarea,
    Input, Flex
} from '@chakra-ui/react';
import styles from './question-modal.module.css'
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {Field, Form, Formik} from "formik";

type props = {
    isOpen: boolean;
    onClose: () => void;
}
export default function CreateQuestionModal({isOpen, onClose}: props) {

    function validateHandler(value: string, targetField: 'subject' | 'content') {
        debugger
        let error
        if (!value) {
            switch (targetField) {
                case 'subject':
                    error = 'فیلد موضوع الزامی است.';
                    return error;
                case 'content':
                    error = 'فیلد متن سوال الزامی است.'
                    return error;
            }
        }
        return error
    }

    return (
        <Modal isOpen={isOpen} size="xl" onClose={onClose}>
            <ModalOverlay/>
            <ModalContent className={styles['modal-content']}>
                <ModalHeader className={styles['modal-header']}>
                    <Heading as="h6" size="sm">ایجاد سوال جدید</Heading>
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Formik
                        initialValues={{subject: '', content: ''}}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            console.log(actions)
                        }}
                    >
                        {(props) => (
                            <Form>
                                <Field name='subject' validate={(e:string) => validateHandler(e, 'subject')}>
                                    {({field, form}: any) => (
                                        <FormControl isInvalid={form.errors.subject && form.touched.subject}>
                                            <FormLabel>موضوع</FormLabel>
                                            <Input type='text' {...field} />
                                            <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='content' validate={(e: string) => validateHandler(e, 'content')}>
                                    {({field, form}: any) => (
                                        <FormControl isInvalid={form.errors.content && form.touched.content}>
                                            <FormLabel>متن سوال</FormLabel>
                                            <Textarea {...field} />
                                            <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Flex justifyContent="flex-end" mt={6}>
                                    <Button colorScheme='green'
                                            variant='ghost'
                                            onClick={onClose}>انصراف</Button>
                                    <Button colorScheme='green'
                                            isLoading={props.isSubmitting}
                                            type='submit'
                                            ms={3}>
                                        ایجاد سوال
                                    </Button>
                                </Flex>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}