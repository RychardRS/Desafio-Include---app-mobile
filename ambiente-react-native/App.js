import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.telaLogin}>
      <View style={styles.img}>
        <Image
          source={require('./assets/logo-include.png')}
        />
      </View>

      <View style={styles.designUsuario}>
        <TextInput
        style={styles.login}
        placeholder = "Email"
        autoCorrect = {false}
        onChangeText = {()=>{}}
        />

        <TextInput
        style={styles.login}
        placeholder = "Senha"
        autoCorrect = {false}
        onChangeText = {()=>{}}
        />
        <TouchableOpacity style={styles.bottom}>
          <Text style={styles.bottomLogar}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottom}>
          <Text style={styles.bottomCad}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  telaLogin: {
    flexGrow: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  img: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 30
  },

  designUsuario: {
    flexGrow: 1,
    width:'90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  login: {
    backgroundColor: '#FFF',
    width:'90%',
    marginBottom: 15,
    fontSize: 17,
    color: '#222',
    borderRadius: 7,
    padding: 10,
  },
  bottom: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  bottomLogar: {
    color: '000000',
    fontSize: 18
  },
  bottomRegister: {
    backgroundColor: '#00BFFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  bottomCad: {
    color: 'FFF',
    fontSize: 18,
  }
});


