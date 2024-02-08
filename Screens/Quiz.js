import {StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

const Quiz = ({navigation}) => {

    const [questions, setQuestions] = useState()
    const [quesIndex, setQuesIndex] = useState(0)

     //MARK: Data fetching
    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple'
        const res = await fetch(url)
        const data = await res.json()

        if (res.ok){
            const results = await data.results

            if (results){
                let temp = []
                results.forEach(element => {
                temp.push({
                    question: element.question
                    .replace(/&quot;/g, '"')
                    .replace(/&#039;/g, "'")
                    .replace(/&amp;/g, " & "),
                    answers: shuffle([...element.incorrect_answers, element.correct_answer]),
                    correct_answer: element.correct_answer
                })
                });   
                setQuestions(temp)
            }
        }else{
            console.log("Data feching error")
        }
        
        
        
    }

    useEffect(() => {
        getQuiz()
    }, [])

    //MARK: Support functions
    const shuffle = (array) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
    }; 

    //MARK: Actions
    const clickNext = () => {
        if (quesIndex < 9){
            setQuesIndex(quesIndex + 1)
        }else{
            setQuesIndex(0)
        }
    }


  return (
    <View style={styles.container}>
        {questions ? 
            <View style={styles.parent}>
                <View style={styles.question}>
                    <Text style={styles.questionText}>Q. {questions[quesIndex].question}</Text>
                </View>

                <View style={styles.options}>
                    <TouchableOpacity  style={styles.option}>
                        <Text style={styles.optionText}>{questions[quesIndex].answers[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.optionText}>{questions[quesIndex].answers[1]}</Text>
                    </TouchableOpacity>        
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.optionText}>{questions[quesIndex].answers[2]}</Text>
                    </TouchableOpacity>        
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.optionText}>{questions[quesIndex].answers[3]}</Text>
                    </TouchableOpacity>      
                </View>

                <View style={styles.controllers}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>SKIP</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={clickNext}>
                            <Text style={styles.buttonText}>NEXT</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                            <Text>END</Text>
                        </TouchableOpacity> */}
                </View>
            </View>
            : 
            <View style={styles.loaderContainer}>
                <ActivityIndicator animating={questions == null} size="large" color="#985f99" />
                <Text style={styles.loaderText}>Questions are loading...</Text>
            </View>
             
        }
    </View>
  )
}

export default Quiz

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
    parent: {
        height: '100%'
    },
    question: {
        marginVertical: 30
    },
    questionText: {
        fontSize: 28,
        fontWeight: 600,
        alignContent: 'stretch'
    },
    options: {
        marginVertical: 16,
        flex: 1,
        flexDirection: 'column',
        marginVertical: 40,

    },
    option: {
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: '#b6c9bb',
        borderRadius: 16,
    },
    optionText: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 16,
        
    },
    controllers: {
        marginBottom: 20,
        paddingVertical: 16,
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',

    },
    button: {
        backgroundColor: '#985f99',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 25,
        width: 100,
        height: 40
    },
    buttonText: {
        color: 'white', 
        fontSize: 16, 
        fontWeight: '600'
    }

    ,
    loaderContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    loaderText: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 16,
    }
})