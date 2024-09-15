// src/components/layout/header.tsx
import { UserCircle } from 'lucide-react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface HeaderProps {
	setSidebarOpen: (isOpen: boolean) => void;
}

export function Header({ setSidebarOpen }: HeaderProps) {
	const router = useRouter();
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

	return (
		<header className="flex items-center justify-between bg-white shadow-md px-4 py-2">
			{/* Logo or Brand Name */}
			<div className="flex items-center">
				<img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
				<span className="font-bold text-lg">YourAppName</span>
			</div>

			{/* User Info and Dropdown */}
			<div className="relative">
				<button
					className="flex items-center focus:outline-none"
					onClick={() => setDropdownOpen(!dropdownOpen)}
				>
					<Avatar className="mr-2">
						<AvatarImage src="/path-to-user-image.jpg" alt="User Name" />
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
					<span className="hidden sm:block">John Doe</span>
				</button>
				{dropdownOpen && (
					<div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
						<a
							href="#"
							className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
							onClick={() => {
								// Clear authentication tokens or state
								// For example:
								localStorage.removeItem('token');
								// Redirect to login page
								router.push('/login');
							}}
						>
							Logout
						</a>
					</div>
				)}
			</div>
		</header>
	);
}
