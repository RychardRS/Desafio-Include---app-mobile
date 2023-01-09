import React from 'react'
import { Button } from 'react-native';
import { StyleSheet, Text , KeyboardAvoidingView, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';

export default function Homepage({ navigation }) {
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D3D3D3'}}>
        <Button 
        //isso vai mudar quando fizer a nova tela, é só para caráter ilustrativo
          title="Perfil do membro"
          onPress={() => navigation.push('ProfileMembro')}
        />
        <Button title="Voltar para tela de usuário" onPress={() => navigation.navigate('Usuário')} />
        
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
      
    );
  }



  