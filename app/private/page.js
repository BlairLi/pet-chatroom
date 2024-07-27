import { useAuth } from '../firebaseConfig';
import { useRouter } from 'next/router';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../firebaseConfig';
import ChatRoom from '../components/ChatRoom';
import ProtectedRoute from '../components/ProtectedRoute';

export default function PrivatePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const chatroomsRef = firestore.collection('chatrooms');
  const query = chatroomsRef.where('members', 'array-contains', user?.uid);
  const [chatrooms] = useCollectionData(query, { idField: 'id' });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    router.push('/signin');
    return null;
  }

  return (
    <ProtectedRoute>
        <div>
        <h1>Chatrooms</h1>
        {chatrooms && chatrooms.map(chatroom => (
            <ChatRoom key={chatroom.id} chatroom={chatroom} />
        ))}
        </div>
    </ProtectedRoute>
  );
}
