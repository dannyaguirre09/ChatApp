import React, {useState} from 'react';
import { StyleSheet, LogBox } from "react-native";
import { Container } from 'native-base';
import * as Font from 'expo-font';
import Login from "./src/screens/Login";
import Chat from "./src/screens/Chat";

LogBox.ignoreAllLogs(true);

export default function App() {

  const [userName, setUserName] = useState(null)

  return (
    <Container style={styles.container}>
    {!userName ? <Login setUserName={setUserName} /> :  <Chat userName={userName} /> }
  </Container>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#16202b'
  }
})



