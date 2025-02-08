import React from 'react';
import Sidebar from '@/app/components/Sidebar';

export interface SidebarProps {
  children: React.ReactNode;
}

function Layout({ children }: SidebarProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}

export default Layout;
