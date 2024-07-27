import { useState } from 'react';
import { firestore, auth } from '../firebaseConfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function ChatRoom({ chatroom }) {
  const messagesRef = firestore.collection('chatrooms').doc(chatroom.id).collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: auth.currentUser.uid,
      photoURL: auth.currentUser.photoURL
    });

    setFormValue('');
  };

  return (
    <div>
      <h2>{chatroom.name}</h2>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

function ChatMessage({ message }) {
  const { text, uid, photoURL } = message;

  return (
    <div>
      <img src={photoURL} alt="" />
      <p>{text}</p>
    </div>
  );
}
