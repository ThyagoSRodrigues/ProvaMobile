import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './AppNavigator';

function App() {
  return <AppNavigator />;
}

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator /> {/* Renderize o AppNavigator aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
