import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import ScreenWrapper from "../components/ScreenWrapper";
import { useState } from "react";
import { Alert } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { i18n } from "../contexts/LanguageContext";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("mjsalinas@unitec.edu");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      Alert.alert("Campos requeridos", "Ingresa tu correo y contraseña.");
      return;
    }

    const success = await login(email.trim(), password);
    if (success) {
      navigation.navigate("MainTabs");
    }
  };

  return (
    <ScreenWrapper>
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

      <CustomButton title={i18n.t("signIn")} onPress={handleLogin} />
      <CustomButton
        title="Registrarme"
        onPress={() => navigation.navigate("Register")}
        variant="secondary"
      />
    </ScreenWrapper>
  );
}
