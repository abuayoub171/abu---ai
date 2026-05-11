import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const API_URL = "https://abu-ai-taxi.onrender.com/chat";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
        }),
      });

      const data = await res.json();
      setResponse(data.reply);

    } catch (error) {
      setResponse("Server connection error");
      console.log(error);
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 24 }}>
        AI Chat
      </Text>

      <TextInput
        value={userInput}
        onChangeText={setUserInput}
        placeholder="Type message"
        style={{
          borderWidth: 1,
          marginVertical: 10,
          padding: 10,
        }}
      />

      <Button title="Send" onPress={sendMessage} />

      <Text style={{ marginTop: 20 }}>
        {response}
      </Text>
    </View>
  );
}




























+0

