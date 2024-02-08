import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View>
            <Text>Result</Text>
        </View>

        <View style={styles.bannerContainer}>
            <Image source={require('../resources/Exams-amico.png')}
                style = {styles.banner}
                resizeMode='contain'
            />
        </View>
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Result

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
        height: 100,
        width: 100,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})