import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      isEmailValid: true,
      passwordsMatch: true,
    };
  }

  handleRegister = () => {
    const { email, password, confirmPassword } = this.state;

    // Verifique se a senha e a confirmação de senha coincidem
    if (password !== confirmPassword) {
      this.setState({ passwordsMatch: false });
      return;
    }

    // Valide o email antes de prosseguir
    if (!this.validateEmail(email)) {
      this.setState({ isEmailValid: false });
      return;
    }

    // Implemente aqui a lógica de registro, por exemplo, fazer uma chamada à API de registro.

    // Após o registro bem-sucedido, você pode navegar para a tela de login ou outra tela apropriada.
    this.props.navigation.navigate('Login');
  };

  validateEmail = (email) => {
    // Implemente a validação de email apropriada de acordo com os padrões.
    // Aqui, usamos uma verificação simples.
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  render() {
    const { isEmailValid, passwordsMatch } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Registro</Text>
        <TextInput
          style={[styles.input, !isEmailValid && styles.invalidInput]}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email, isEmailValid: true })}
        />
        {!isEmailValid && <Text style={styles.errorText}>Informe um email válido.</Text>}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <TextInput
          style={[styles.input, !passwordsMatch && styles.invalidInput]}
          placeholder="Confirmação de Senha"
          secureTextEntry={true}
          onChangeText={(confirmPassword) =>
            this.setState({ confirmPassword, passwordsMatch: true })
          }
        />
        {!passwordsMatch && (
          <Text style={styles.errorText}>A senha e a confirmação de senha não coincidem.</Text>
        )}
        <Button title="Registrar" onPress={this.handleRegister} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Já tem uma conta? Faça login</Text>
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
  invalidInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginLink: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegistrationScreen;
