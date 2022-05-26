import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView, Alert } from 'react-native';

import logo from './assets/tuxtu.png';
import {Button} from 'react-native-web';

export default function App() {
  const [x, setX] = useState('');
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');
  const [d1, setD1] = useState('');
  const [d2, setD2] = useState('');
  // const [d2, setD3] = useState('');
  const [e, setE] = useState('');
  const [f, setF] = useState('');
  const [g, setG] = useState('');

  async function handleSubmit() {
    let d3 = d2 / 2;
    var p = formula(parseFloat(x), parseFloat(a), parseFloat(b), parseFloat(c), parseFloat(d), parseFloat(d1), parseFloat(d2), parseFloat(d3), parseFloat(e), parseFloat(f), parseFloat(g));
    // console.log(p)
    Alert.alert('Resultado do calculo', `${p}`, [
      {
        // text: 'Cancelar',
        // onPress: () => console.log('Cancel Pressed'),
        // style: 'cancel',
      },
      { text: 'OK', 
        // onPress: () => console.log('OK Pressed') 
      },
    ]);
  }

  function formula(x, a, b, c, d, d1, d2, d3, e, f, g){
    var  p = x +(a * b * c) + (((d * d1) + d2 + d3) * a * e) + f + g;
    if(Number.isNaN(p)){
          return p = 'Não foi possível calcular. Por favor preencha todos os campos!'
    }else{
       return parseFloat(p);
    }
 }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Image source={logo} style={styles.logo} /> 
      <View style={styles.form}>
        <Text style={styles.titulo}>Simulador de Taxa</Text>
        <Text style={styles.label} >Valor de X:</Text>
        <TextInput 
        style={styles.input}
        placeholder="Valor de X"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={x}
        onChangeText={setX}
        />
        <Text style={styles.label} >Quantidade de Técnicos envolvidos na análise (Valor de A):</Text>
        <TextInput 
        style={styles.input}
        placeholder="Quantidade de Técnicos envolvidos na análise (Valor de A)"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={a}
        onChangeText={setA}
        />
        <Text style={styles.label} >Quantidade de Horas/Técnica necessárias para análise (Valor de B):</Text>
        <TextInput 
        style={styles.input}
        placeholder="Quantidade de Horas/Técnica necessárias para análise (Valor de B)"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={b}
        onChangeText={setB}
        />
        <Text style={styles.label} >Valor em UFIR da Hora/Técnico para análise fixado em 50 UFIR (Valor de C):</Text>
        <TextInput 
        style={styles.input}
        placeholder="Valor em UFIR da Hora/Técnico para análise fixado em 50 UFIR (Valor de C)"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={c}
        onChangeText={setC}
        />
        <Text style={styles.label} >Valor da diária (Valor de D):</Text>
        <TextInput 
        style={styles.input}
        placeholder="Valor da diária (Valor de D)"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={d}
        onChangeText={setD}
        />
        <Text style={styles.label} >Total de Diárias (Valor de D1):</Text>
        <TextInput 
        style={styles.input}
        placeholder="Total de Diárias (Valor de D1)"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={d1}
        onChangeText={setD1}
        />
        <Text style={styles.label} >Valor do combustível usado na vistoria (Valor de D2):</Text>
        <TextInput 
        style={styles.input}
        placeholder="Valor do combustível usado na vistoria (Valor de D2)"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={d2}
        onChangeText={setD2}
        />
        <Text style={styles.label} >Quantidade de Viagens necessárias para a vistoria (Valor de E):</Text>
        <TextInput 
        style={styles.input}
        placeholder="Quantidade de Viagens necessárias para a vistoria (Valor de E)"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={e}
        onChangeText={setE}
        />
        <Text style={styles.label} >Taxa de Requerimento de Publicação (Valor de F):</Text>
        <TextInput 
        style={styles.input}
        placeholder="Taxa de Requerimento de Publicação (Valor de F)"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={f}
        onChangeText={setF}
        />
        <Text style={styles.label} >Taxa de Recebimento de Publicação (Valor de G):</Text>
        <TextInput 
        style={styles.input}
        placeholder="Taxa de Recebimento de Publicação (Valor de G)"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={g}
        onChangeText={setG}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}> 
          <Text style={styles.buttonText} >Calcular </Text>        
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // justifyContent: "flex-start",
    alignItems: 'center',
    height: 200
  },
  titulo: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 10
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop:30,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },  
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 0,
    fontSize: 16,
    color: '#444',
    height: 35,
    marginBottom: 20,
    borderRadius: 2,
  },
  logo: {
    marginTop: 50,
    width: 305, 
    height: 100,
    marginLeft: 50
  },
  button: {
    height: 42,
    backgroundColor: '#22bb33',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 100
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,

  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 0,
  }
});
