'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/PromotionFormModal';
import { use } from 'react';

export interface PageProps {
    params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
    const router = useRouter();
    const {id} = use(params);

    return (
        <PromotionFormModal
            companyId={id}
            show={true}
            onClose={() => router.back()}
        />
    );
}