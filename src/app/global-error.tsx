'use client';

import React from 'react';

export interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h1>Something globally went wrong</h1>
          <p>Error message: {error.message}</p>
          <button
            onClick={reset}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#f00',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
