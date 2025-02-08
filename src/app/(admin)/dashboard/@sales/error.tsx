'use client';

import React from 'react';

export interface ErrorComponentProps {
    error: Error;
};

function ErrorComponent({error}: ErrorComponentProps ) {
    return (
        <div>Unexpected error : {error.message}</div>
    );
}

export default ErrorComponent;