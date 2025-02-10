'use client';

import React from 'react';
import CompanyForm from '@/app/components/CompanyForm';
import Modal, { ModalProps } from '@/app/components/Modal';

export default function CompanyFormModal({ onCloseAction, ...rest }: ModalProps) {
    if(!onCloseAction) return;
    return (
        <Modal {...rest} onClose={onCloseAction}>
            <CompanyForm onSubmit={() => onCloseAction()} />
        </Modal>
    );
}