import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [homeId, setHomeId] = useState('');
  const [direccion, setDireccion] = useState('');
  const [distrito, setDistrito] = useState('');
  const [areaTotal, setAreaTotal] = useState('');
  const [areaConstruida, setAreaConstruida] = useState('');
  const [casaRecuperada, setCasaRecuperada] = useState(null);

  const guardarCasa = () => {
    const casa = {
      homeId,
      direccion,
      distrito,
      areaTotal,
      areaConstruida,
    };

    // Aquí puedes agregar la lógica para guardar la casa en tu base de datos o almacenamiento

    Alert.alert('Registro exitoso');
  };

  const recuperarCasa = () => {
    // Aquí puedes agregar la lógica para recuperar la casa de tu base de datos o almacenamiento

    // Ejemplo de cómo se podría recuperar una casa
    const casa = {
      homeId: '123',
      direccion: 'Calle Principal 123',
      distrito: 'Distrito Ejemplo',
      areaTotal: '200 m²',
      areaConstruida: '150 m²',
    };

    if (casa.homeId === homeId) {
      setCasaRecuperada(casa);
    } else {
      Alert.alert('Código inválido');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro y Consulta de Casas</Text>

      <TextInput
        placeholder="Home ID"
        value={homeId}
        onChangeText={setHomeId}
        style={styles.input}
      />
      <TextInput
        placeholder="Dirección"
        value={direccion}
        onChangeText={setDireccion}
        style={styles.input}
      />
      <TextInput
        placeholder="Distrito"
        value={distrito}
        onChangeText={setDistrito}
        style={styles.input}
      />
      <TextInput
        placeholder="Área Total"
        value={areaTotal}
        onChangeText={setAreaTotal}
        style={styles.input}
      />
      <TextInput
        placeholder="Área Construida"
        value={areaConstruida}
        onChangeText={setAreaConstruida}
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button title="Guardar Casa" onPress={guardarCasa} color="#42a5f5" />
        <Button title="Recuperar Casa" onPress={recuperarCasa} color="#42a5f5" />
      </View>

      {casaRecuperada && (
        <View style={styles.casaContainer}>
          <Text style={styles.casaLabel}>Información de la Casa:</Text>
          <Text style={styles.casaText}>Home ID: {casaRecuperada.homeId}</Text>
          <Text style={styles.casaText}>Dirección: {casaRecuperada.direccion}</Text>
          <Text style={styles.casaText}>Distrito: {casaRecuperada.distrito}</Text>
          <Text style={styles.casaText}>Área Total: {casaRecuperada.areaTotal}</Text>
          <Text style={styles.casaText}>Área Construida: {casaRecuperada.areaConstruida}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginBottom: 20,
  },
  casaContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
  },
  casaLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  casaText:{
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
});

export default App;