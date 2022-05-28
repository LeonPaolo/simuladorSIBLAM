import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, Alert, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
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
  const [d3, setD3] = useState('');
  const [e, setE] = useState('');
  const [f, setF] = useState('');
  const [g, setG] = useState('');

  React.useEffect(() => {
    valorD3()
  }, [d3]);

  async function handleSubmit() {
    let p = formula(
      parseFloat(x),
      parseFloat(a),
      parseFloat(b),
      parseFloat(c),
      parseFloat(d),
      parseFloat(d1),
      parseFloat(d2),
      parseFloat(d3),
      parseFloat(e),
      parseFloat(f),
      parseFloat(g));
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
  async function valorD3() {
    let resp = d2 / 2;
    setD3(resp);
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
        onBlur={valorD3}
        />
        <Text style={styles.label} >Manutenção do Veículo (50% de D2) (Valor de D3):</Text>
        <Text style={styles.input}> {d3} </Text>
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
      <Text
          style={styles.whatsapp}
          onPress={() => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=5596991953535'
            );
          }}>
          <FontAwesome name="whatsapp" size={24} color="green" />Dúvidas e Sugestões
        </Text>
        <Text
          style={styles.email}
          onPress={() => {
            Linking.openURL(
              'mailto:contato@tuxtu.com.br'
            );
          }}>
          <Entypo name="email" size={18} color="blue" />contato@tuxtu.com.br
        </Text>
      </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  whatsapp: {
    marginLeft: 65,
    marginBottom: 2,
    fontSize: 22,
    color: 'green'
  },
  email: {
    marginLeft: 80,
    marginBottom: 50,
    fontSize: 18,
    color: 'blue'
  },
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
    marginLeft: 40
  },
  button: {
    height: 42,
    backgroundColor: '#22bb33',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30
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
