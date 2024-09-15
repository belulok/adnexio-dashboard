// src/components/layout/index.tsx
import { ReactNode, useState } from 'react';
import { Sidebar } from './sidebar';
import { Header } from './header';

interface LayoutProps {
	children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
			<div className="flex flex-col flex-1">
				<Header setSidebarOpen={setSidebarOpen} />
				<main className="flex-1 overflow-auto p-6">{children}</main>
			</div>
		</div>
	);
}
