import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const BiometricAuthScreen = ({ navigation }) => {
  const authenticateBiometric = async () => {
    const hasBiometricHardware = await LocalAuthentication.hasHardwareAsync();
    const supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

    if (!hasBiometricHardware || supportedBiometrics.length === 0) {
      Alert.alert('Error', 'El dispositivo no soporta autenticación biométrica');
      return;
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Autentícate con tu huella digital',
      fallbackLabel: 'Usar contraseña',
    });

    if (biometricAuth.success) {
      Alert.alert('Autenticación exitosa', '¡Bienvenido!');
      navigation.navigate('Homepage'); // Redirigir al Homepage si la autenticación es exitosa
    } else {
      Alert.alert('Error', 'La autenticación biométrica falló.');
    }
  };

  useEffect(() => {
    authenticateBiometric(); // Intentar autenticación al cargar la pantalla
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Autenticación Biométrica</Text>
      <Button title="Reintentar Autenticación" onPress={authenticateBiometric} />
    </View>
  );
};

export default BiometricAuthScreen;
