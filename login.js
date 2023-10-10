import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = () => {
    const correctEmail = 'usuario@example.com';
    const correctPassword = 'senha123';

    const { email, password } = this.state;

    if (email === correctEmail && password === correctPassword) {
      this.props.navigation.navigate('Home');
    } else {
      Alert.alert('Erro de Autenticação', 'Credenciais incorretas. Tente novamente.');
    }
  };

  handleForgotPassword = () => {
    // Implemente a lógica para a recuperação de senha aqui
    Alert.alert('Esqueceu a Senha', 'Enviamos instruções para o seu email.');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <TouchableOpacity onPress={this.handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  forgotPasswordText: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
