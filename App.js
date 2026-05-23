















import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async () => {
    const res = await fetch('http://192.168.1.5:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <View style={{ padding: 50 }}>
      <Text>AI Chat</Text>

      <TextInput
        placeholder="Type..."
        value={message}
        onChangeText={setMessage}
        style={{ borderWidth: 1, margin: 10 }}
      />

      <Button title="Send" onPress={sendMessage} />

      <Text>Reply: {reply}</Text>
    </View>
  );
}















+0

