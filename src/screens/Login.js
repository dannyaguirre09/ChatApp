import React, {useState} from 'react'
import { StyleSheet, SafeAreaView, StatusBar, Image, View, ScrollView} from 'react-native'
import { Item, Input, Text, Button } from "native-base";
import logoApp from '../assets/chatLogo.png'
import * as Font from 'expo-font';

export default function Login(props) {

    const {setUserName} = props;
    const [name, setName] = useState('')

    const onSubmit = () => {
        setUserName(name);
    }

    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View>                
                <Image source={logoApp} style={styles.logo} resizeMode='contain' />
            </View>
            <Item>
                <Input
                    value={name}
                    onChange={(e) => setName(e.nativeEvent.text)}
                    placeholder='Nombre de Usuario'
                    style={{color:'#fff'}}
                    placeholderTextColor='grey'
                />
            </Item>
            <Button onPress={onSubmit} block style={styles.login}>
                <Text>Entrar</Text>
            </Button>
        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:'100%',
        height:200,
        marginBottom:30
    },
    container:{
        marginHorizontal:50,
        marginVertical:100
    },
    login:{
        marginTop:40,
        justifyContent:'center',
        backgroundColor:'#0098d3'
    }
})
