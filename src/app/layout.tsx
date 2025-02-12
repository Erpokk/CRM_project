import React from 'react';
import {Plus_Jakarta_Sans} from 'next/font/google';
import Providers from '@/app/components/Providers';

import './globals.css';

const font = Plus_Jakarta_Sans({subsets: ['latin']});

function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={font.className}>
            <Providers>
                {children}
            </Providers>
        </body>
        </html>
    );
}

export default RootLayout;
