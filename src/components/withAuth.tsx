// src/components/withAuth.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function withAuth(Component: React.ComponentType) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();
    const isAuthenticated = true; // Replace with actual authentication logic

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace('/login');
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };
}
