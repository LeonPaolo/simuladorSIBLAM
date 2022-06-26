import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, Alert, Linking, Modal, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import logo from './assets/tuxtu.png';
import { TextInputMask } from 'react-native-masked-text'

export default function App() {
  const [x, setX] = useState('R$: 0,00');
  const [a, setA] = useState('1');
  const [b, setB] = useState('1');
  const [c, setC] = useState('R$: 0,00');
  const [d, setD] = useState('R$: 0,00');
  const [d1, setD1] = useState('1');
  const [d2, setD2] = useState('R$: 0,00');
  const [d3, setD3] = useState('R$: 0,00');
  const [e, setE] = useState('1');
  const [f, setF] = useState('R$: 0,00');
  const [g, setG] = useState('R$: 0,00');
  const [modalVisible, setModalVisible] = useState(false);
  const [resultado, setResultado] = useState('0,00');

  React.useEffect(() => {
    valorD3()
  }, [d3]);
   function realParaNumber(texto){
    var compativelComParseFloat = texto.replace("R$: ","");
    compativelComParseFloat = compativelComParseFloat.replace(".","");
    compativelComParseFloat = compativelComParseFloat.replace(",",".");
    var valor = parseFloat(compativelComParseFloat);
    return valor;
}
  async function handleSubmit() {
    let p = formula(
      realParaNumber(x),
      parseFloat(a),
      parseFloat(b),
      realParaNumber(c),
      realParaNumber(d),
      realParaNumber(d1),
      realParaNumber(d2),
      parseFloat(d3),
      parseFloat(e),
      realParaNumber(f),
      realParaNumber(g)
      );
      
      setResultado(p)
      setModalVisible(true)
    // Alert.alert('Resultado do calculo', `${p}`, [
    //   {
    //     // text: 'Cancelar',
    //     // onPress: () => console.log('Cancel Pressed'),
    //     // style: 'cancel',
    //   },
    //   { text: 'OK', 
    //     // onPress: () => console.log('OK Pressed') 
    //   },
    // ]);
  }
  async function valorD3() {
    let value = realParaNumber(d2)
    let resp = (value / 2);
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
        <TextInputMask
          style={styles.input}
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$: ',
              suffixUnit: ''
            }}
            value={x}
            onChangeText={setX}
          />
        <Text style={styles.label} >Quantidade de Técnicos envolvidos na análise (Valor de A):</Text>
        <TextInput 
        style={styles.input}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={a.replace(/[^0-9]/g, '')}
        onChangeText={setA}        
        />        
        <Text style={styles.label} >Quantidade de Horas/Técnica necessárias para análise (Valor de B):</Text>
        <TextInput 
        style={styles.input}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={b.replace(/[^0-9]/g, '')}
        onChangeText={setB}
        />
        <Text style={styles.label} >Valor em UFIR da Hora/Técnico para análise fixado em 50 UFIR (Valor de C):</Text>
        <TextInputMask
          style={styles.input}
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$: ',
              suffixUnit: ''
            }}
            value={c}
            onChangeText={setC}
          />
        <Text style={styles.label} >Valor da diária (Valor de D):</Text>
        <TextInputMask
          style={styles.input}
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$: ',
              suffixUnit: ''
            }}
            value={d}
            onChangeText={setD}
          />
        <Text style={styles.label} >Total de Diárias (Valor de D1):</Text>
        <TextInput 
        style={styles.input}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={d1.replace(/[^0-9]/g, '')}
        onChangeText={setD1}
        />
        <Text style={styles.label} >Valor do combustível usado na vistoria (Valor de D2):</Text>
        <TextInputMask
          style={styles.input}
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$: ',
              suffixUnit: ''
            }}
            value={d2}
            onChangeText={setD2}
            onBlur={valorD3}
          />
        <Text style={styles.label} >Manutenção do Veículo (50% de D2) (Valor de D3):</Text>
        {/* <Text style={styles.input}> {d3} </Text> */}
        <TextInputMask
          style={styles.input}
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$: ',
              suffixUnit: ''
            }}
            value={d3}
            // onChangeText={setF}
            editable = {false}
          />
        <Text style={styles.label} >Quantidade de Viagens necessárias para a vistoria (Valor de E):</Text>
        <TextInput 
        style={styles.input}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={e.replace(/[^0-9]/g, '')}
        onChangeText={setE}
        />
        <Text style={styles.label} >Taxa de Requerimento de Publicação (Valor de F):</Text>
        <TextInputMask
          style={styles.input}
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$: ',
              suffixUnit: ''
            }}
            value={f}
            onChangeText={setF}
          />
        <Text style={styles.label} >Taxa de Recebimento de Publicação (Valor de G):</Text>
        <TextInputMask
          style={styles.input}
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$: ',
              suffixUnit: ''
            }}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={stylesModal.centeredView}>
          <View style={stylesModal.modalView}>
            {/* <Text style={stylesModal.modalText}>{resultado}</Text> */}
            <TextInputMask
            style={stylesModal.modalText}
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$: ',
              suffixUnit: ''
            }} 
            editable = {false}
            value={resultado}
            />
            <Pressable
              style={[stylesModal.button, stylesModal.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={stylesModal.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
          
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
const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    // textAlign: 'center',
    
    borderWidth: 0,
    borderColor: '#ddd',
    paddingHorizontal: 0,
    fontSize: 16,
    color: '#444',
    height: 35,
    marginBottom: 20,
    borderRadius: 2,
  },
});
// centeredView modalView modalText button buttonClose textStyle