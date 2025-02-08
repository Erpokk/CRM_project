'use client';
import React from 'react';
import CompanyForm from '@/app/components/CompanyForm';


function Page() {
    return (
        <div className="py-6 px-10">
            <CompanyForm onSubmit={console.log} />
        </div>
    );
}

export default Page;