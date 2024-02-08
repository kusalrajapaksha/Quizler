import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';


const Home = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.bannerContainer}>
                <Image source={require('../resources/Exams-amico.png')}
                    style = {styles.banner}
                    resizeMode='contain'
                />
            </View>

            <TouchableOpacity onPress={() => {navigation.navigate("Quiz")}} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    
    container: {
        display: 'flex',
        height: '100%',
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        // backgroundColor: '#bfedc1',
        
    },
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        backgroundColor: '#985f99',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 16,
    },
    buttonText: {
        color: 'white', 
        fontSize: 20, 
        fontWeight: '600'
    }
})
