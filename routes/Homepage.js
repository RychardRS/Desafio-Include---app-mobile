import React from 'react'
import { Button } from 'react-native';
import { StyleSheet, Text , KeyboardAvoidingView, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import CircleButton from 'react-native-circle-button';


//são testes temporários com o circle button, não sei usar ainda, então tá feito errado
export default function Homepage({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D3D3D3',
      }}>
         <View style ={{top: 60, left: 60}}>
          <Text>Rychardson</Text>
         </View>
        <CircleButton
          onPressButtonTop={() => navigation.push('ProfileMembro')}
        />
        <View style ={{top: 60, left: 50}}>
          <Text>Marcelly</Text>
         </View>
        <CircleButton 
        onPressButtonTop={() => navigation.push('ProfileMembro')}
        />
        <View style ={{top: 60, left: 50}}>
          <Text>Amanda</Text>
         </View>
        <CircleButton
          onPressButtonTop={() => navigation.push('ProfileMembro')}
        />
        <View style ={{top: 60, left: 55}}>
          <Text>Leonardo</Text>
         </View>
        <CircleButton
          onPressButtonTop={() => navigation.push('ProfileMembro')}
        />
        <Button title="Voltar" onPress={() => navigation.navigate('Usuário')} />
      </View>
  
    );
  }




  