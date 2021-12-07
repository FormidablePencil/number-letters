import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [showErrMsg, setShowErrMsg] = useState(false)
  const [text, setText] = useState("")
  const [answer, setAnswer] = useState<number | null>(null)
  const [addedAnswer, setAddedAnswer] = useState<number | null>(null)

  function onPress() {
    try {
      setShowErrMsg(false)
      let result = calculate(text)
      setAnswer(result)
      setAddedAnswer(addCalculate(result))
    } catch {
      setShowErrMsg(true)
    }
  }

  function calculate(word: string) {
    let sum = 0
    for (let i = 0; i < word.length; i++) {
      sum += lN.get(word[i].toLowerCase())!
      lN.get(word[i])
    }
    return sum
  }

  function addCalculate(num: number | null) {
    if (num === null) return null
    let sum = 0
    function reduce(number: number) {
      for (let i = 0; i < number.toString().length; i++) {
        sum += parseInt(number.toString()[i]);
      }
    }
    reduce(num)
    let reducedToSingleChar = false
    // while (reducedToSingleChar === false) {
    //   console.log("wt")
    //   if (sum.toString().length > 1) {
    //     reduce(sum)
    //   } else reducedToSingleChar = true
    // }
    return sum
  }

  return (
    <View style={styles.container}>
      {showErrMsg ?? <Text>Please don't use symbols or numbers</Text>}
      <Text style={{ fontSize: 50, color: "#fff" }}>{answer}</Text>
      <Text style={{ fontSize: 40, color: "#fff" }}>{addedAnswer}</Text>
      <TextInput style={{ backgroundColor: "rgb(230,230,230)", borderRadius: 10, fontSize: 50, width: 300, margin: 60 }} onChangeText={(text) => setText(text)} />
      <Pressable onPress={onPress}>
        <Text style={{ fontSize: 25, backgroundColor: "#C2B9FF", borderRadius: 10, padding: 15 }}>Calculate</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const lettersNumbers = {
  "a": 6,
  "b": 12,
  "c": 18,
  "d": 24,
  "e": 30,
  "f": 36,
  "g": 42,
  "h": 48,
  "i": 54,
  "j": 60,
  "k": 66,
  "l": 72,
  "m": 78,
  "n": 84,
  "o": 90,
  "p": 96,
  "q": 102,
  "r": 108,
  "s": 114,
  "t": 120,
  "u": 126,
  "v": 132,
  'w': 138,
  'x': 144,
  'y': 150,
  'z': 156,
}

const lN = new Map(Object.entries(lettersNumbers))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
