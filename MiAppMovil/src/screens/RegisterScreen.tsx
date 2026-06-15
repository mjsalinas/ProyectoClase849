import { useState } from "react";
import { Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import ScreenWrapper from "../components/ScreenWrapper";
import { useAuth } from "../contexts/AuthContext";

     //definicion de una variable de estado en ReactN
export default function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();

  const handleRegister = async () => {
    if (!email.trim() || !password) {
      Alert.alert("Campos requeridos", "Ingresa tu correo y contraseña.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Contraseña inválida", "La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    const { success, hasSession } = await register(email.trim(), password, {
      name: name.trim(),
      phoneNumber: phoneNumber.trim(),
    });

    if (!success) return;

    if (hasSession) {
      navigation.navigate("MainTabs");
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <ScreenWrapper>
      <CustomInput
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={setName}
      />

      <CustomInput
        type="number"
        placeholder="Ingresa tu número de teléfono"
        value={phoneNumber}
        onChange={setPhoneNumber}
      />

      <CustomInput
        type="email"
        placeholder="Ingresa tu correo"
        value={email}
        onChange={setEmail}
      />

      <CustomInput
        type="password"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChange={setPassword}
      />

      <CustomButton title="Registrarme" onPress={handleRegister} />
      <CustomButton
        title="Ya tengo cuenta"
        onPress={() => navigation.navigate("Login")}
        variant="secondary"
      />
    </ScreenWrapper>
  );
}
