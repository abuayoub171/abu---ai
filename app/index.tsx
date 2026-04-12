
















import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function HomeScreen() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    try {
      const res = await fetch("http://192.168.1.5:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setReply(data.reply);
    } catch (error) {
      setReply("Server connection error");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>AI Chat</Text>

      <TextInput
        placeholder="Type message"
        value={message}
        onChangeText={setMessage}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />

      <Button title="Send" onPress={sendMessage} />

      <Text style={{ marginTop: 20 }}>{reply}</Text>
    </View>
  );
}









































+0

