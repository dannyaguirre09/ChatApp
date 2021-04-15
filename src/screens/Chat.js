import React, {useState, useEffect, useRef} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Header, Body, Title } from "native-base";
import * as Font from 'expo-font';
import Input from "../components/Input";
import firebase from "../util/firebase";
import moment from 'moment'
import 'firebase/database';
import Message from "../components/Message";
import { map } from "lodash";

export default function Chat(props) {

    const {userName} = props;
    const [messages, setMessages] = useState([])
    const chatScrollRef = useRef();

    useEffect(() => {
        const chat = firebase.database().ref('general');
        chat.on('value', (snapshot) => {            
            setMessages(snapshot.val())
        })
    }, [])

    useEffect(() => {
        chatScrollRef.current.scrollTo({y:1000000000})
    }, [messages])

    const sendMessage = (message) =>{
        const time = moment().format('hh:mm a');
        firebase.database().ref('general').push({userName, text:message, time});
    }

    return (
        <>
        <Header style={styles.header} iosBarStyle='light-content'>
            <Body>
                <Title style={{color:'#fff'}}>Chat App</Title>
            </Body>
        </Header>
            <View style={styles.content}>
                <ScrollView style={styles.chartView} ref={chatScrollRef}>
                    {map(messages, (message, index) => (
                        <Message key={index} message={message} name={userName}  />   
                    ))}
                         
                </ScrollView>       
                <Input  sendMessage= {sendMessage}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'space-between'
    },
    header:{
        backgroundColor:'#16202b'
    },
    chartView:{
        backgroundColor:'#1b2734'
    }
})
