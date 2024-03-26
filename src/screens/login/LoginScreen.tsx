import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'

import styles from './Styles';
import { RoundedButton } from '../../components/RoundedButton';


const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../assets/background.jpg')}
      />

      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <Text style={styles.logoText}>Vuelta al menú en 365 platos</Text>
      </View>

      <View style={{ ...styles.form, height: '55%' }}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >

          <Text style={styles.formText}>Inicio de Sesión</Text>

          <View style={{ marginTop: 30 }}>

            <RoundedButton
              text='Ingresar'
              onPress={() => console.log('Login')}
            />

            <View style={styles.formLogin}>
              <Text style={{ fontWeight: '500' }}>No tienes cuenta?</Text>
              <TouchableOpacity
                onPress={() => console.log('Register')}
              >
                <Text style={styles.formRegisterText}>Registrate</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default LoginScreen;
