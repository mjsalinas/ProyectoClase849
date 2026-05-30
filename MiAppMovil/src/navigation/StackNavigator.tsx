import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabsNavigator";
import ProductDetailScreen from "../screens/ProductDetailScreen";

//1. declarar tipado para pantallas y sus parametros
export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
  ProductDetail: { productId: string };
};

//2. crear el stack navigator el cual va a manejar la navegacion
const Stack = createNativeStackNavigator<RootStackParamList>();

//3. utilizar el stack 
export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Skincare Tracker" }}
      />
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: "Detalle del producto" }}
      />
    </Stack.Navigator>
  );
}
