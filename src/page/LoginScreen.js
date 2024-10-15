import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Simulación de credenciales almacenadas localmente
const users = [
  { email: 'usuario@test.com', password: 'Password123' }
];

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return passwordRegex.test(password);
  };

  const login = () => {
    // Validaciones de formato de correo y contraseña
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor ingresa un correo válido');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número');
      return;
    }

    // Simular validación de usuario
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      Alert.alert('Login exitoso');
      navigation.navigate('BiometricAuth'); // Redirigir a la pantalla de autenticación biométrica
    } else {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Correo Electrónico</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Introduce tu correo"
      />
      <Text style={styles.label}>Contraseña</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={!showPassword} // Cambia el estado según showPassword
          onChangeText={setPassword}
          value={password}
          placeholder="Introduce tu contraseña"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color="gray" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Button title="Iniciar Sesión" onPress={login} />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra los elementos verticalmente
    padding: 20,
    backgroundColor: '#f9f9f9', // Color de fondo ligero
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc', // Color del borde
    borderRadius: 5, // Bordes redondeados
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff', // Color de fondo de los inputs
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  passwordInput: {
    flex: 1, // Para que ocupe el espacio restante
    padding: 10,
  },
  icon: {
    paddingRight: 10, // Añade un padding a la derecha del icono
  },
});

export default LoginScreen;
