import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

class PasswordRecoveryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isEmailValid: true, // Adicionamos um estado para validar o email
    };
  }

  handlePasswordRecovery = () => {
    const { email } = this.state;

    // Implemente a lógica de recuperação de senha aqui.
    // Você pode enviar um email de redefinição de senha ou gerar um código de redefinição de senha e enviá-lo por email.

    // Valide o email antes de prosseguir
    if (!this.validateEmail(email)) {
      this.setState({ isEmailValid: false });
      return;
    }

    // Simule uma recuperação de senha bem-sucedida para este exemplo.
    // Em um aplicativo real, você deve implementar a lógica de recuperação de senha com um servidor ou serviço de email.
    Alert.alert('Solicitação de Recuperação de Senha', `Um email de recuperação foi enviado para ${email}.`);
  };

  validateEmail = (email) => {
    // Implemente a validação de email apropriada de acordo com os padrões.
    // Aqui, usamos uma verificação simples.
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  render() {
    const { isEmailValid } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Recuperação de Senha</Text>
        <TextInput
          style={[styles.input, !isEmailValid && styles.invalidInput]}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email, isEmailValid: true })}
        />
        {!isEmailValid && <Text style={styles.errorText}>Informe um email válido.</Text>}
        <Button title="Recuperar Senha" onPress={this.handlePasswordRecovery} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Voltar para o Login</Text>
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

export default PasswordRecoveryScreen;
