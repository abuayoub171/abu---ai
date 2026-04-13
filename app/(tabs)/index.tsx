




import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function HomeScreen() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = () => {

    fetch("http://192.168.1.6:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.reply);
      })
      .catch((err) => {
        setResponse("Error connecting to server");
      });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>AI Chat</Text>

      <TextInput
        value={userInput}
        onChangeText={setUserInput}
        placeholder="Type message"
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />

      <Button title="Send" onPress={sendMessage} />

      <Text style={{ marginTop: 20 }}>{response}</Text>
    </View>
  );
}






































































+0

