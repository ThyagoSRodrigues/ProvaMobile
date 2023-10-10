import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  handleNavigateToAppointments = () => {
    // Implemente a lógica de navegação para a tela de consultas agendadas.
    // this.props.navigation.navigate('AppointmentsScreen');
  };

  handleNavigateToPrescriptions = () => {
    // Implemente a lógica de navegação para a tela de prescrições médicas.
    // this.props.navigation.navigate('PrescriptionsScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/doctor-icon.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Bem-vindo, [Nome do Paciente]</Text>
        <Text style={styles.nextAppointment}>Próxima Consulta:</Text>
        <Text style={styles.appointmentInfo}>Data: [Data da Consulta]</Text>
        <Text style={styles.appointmentInfo}>Horário: [Horário da Consulta]</Text>
        <Button title="Consultas Agendadas" onPress={this.handleNavigateToAppointments} />
        <Button title="Prescrições Médicas" onPress={this.handleNavigateToPrescriptions} />
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 10,
  },
  nextAppointment: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  appointmentInfo: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default HomeScreen;
