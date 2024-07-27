import { useAuth } from '../firebaseConfig';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [user, loading]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
