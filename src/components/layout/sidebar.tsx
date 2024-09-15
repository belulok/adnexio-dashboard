// src/components/layout/sidebar.tsx
import { useState } from 'react';
import Link from 'next/link';
import { Home, BookOpen, Calendar, Menu, X } from 'lucide-react';

interface SidebarProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
	const menuItems = [
		{ name: 'Dashboard', icon: Home, href: '/dashboard' },
		{ name: 'Lessons', icon: BookOpen, href: '/lessons' },
		{ name: 'Attendance', icon: Calendar, href: '/attendance' },
	];

	return (
		<div
			className={`${isOpen ? 'w-64' : 'w-20'
				} bg-white h-full transition-width duration-300 shadow-md relative`}
		>
			<button
				className="absolute top-4 right-4 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>
			<div className="flex flex-col mt-16">
				{menuItems.map((item) => (
					<Link
						key={item.name}
						href={item.href}
						className={`flex items-center p-4 hover:bg-gray-100 ${isOpen ? 'justify-start' : 'justify-center'
							}`}
					>
						<item.icon size={24} />
						{isOpen && <span className="ml-4">{item.name}</span>}
					</Link>
				))}
			</div>
		</div>
	);
}
