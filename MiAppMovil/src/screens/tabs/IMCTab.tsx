import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

export default function IMCTab() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  const calcular = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;
    
    if (p > 0 && a > 0) {
      const imc = Math.round((p / (a * a)) * 10) / 10;
      setResultado(imc);
    }
  };

  const getCategoria = (imc: number) => {
    if (imc < 18.5) return { label: 'Bajo peso', color: '#3498db' };
    if (imc < 25)   return { label: 'Normal', color: '#27ae60' };
    if (imc < 30)   return { label: 'Sobrepeso', color: '#e67e22' };
    return { label: 'Obesidad', color: '#c0392b' };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      
      <CustomInput 
        type="number" 
        placeholder="Peso (kg)" 
        value={peso} 
        onChange={setPeso} 
      />
      <CustomInput 
        type="number" 
        placeholder="Altura (cm)" 
        value={altura} 
        onChange={setAltura} 
      />

      <CustomButton title="Calcular" onPress={calcular} variant="primary" />

      {resultado !== null && (
        <View style={styles.result}>
          <Text style={styles.imcNum}>{resultado}</Text>
          <Text style={[styles.categoria, { color: getCategoria(resultado).color }]}>
            {getCategoria(resultado).label}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 24, 
    justifyContent: 'center' 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 30, 
    color: '#5f0650', 
    textAlign: 'center' 
  },
  result: { 
    alignItems: 'center', 
    marginTop: 40 
  },
  imcNum: { 
    fontSize: 72, 
    fontWeight: 'bold', 
    color: '#5f0650' 
  },
  categoria: { 
    fontSize: 24, 
    fontWeight: '600', 
    marginTop: 8 
  },
});