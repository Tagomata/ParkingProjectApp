import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import LoginForm from "../../components/Account/LoginForm";

export default function Login() {
  const toastRef = useRef();
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/logo.png")}
        resizeMode="contain"
        style={style.logo}
      />
      <View style={style.viewContainer}>
        <LoginForm toastRef={toastRef} />
        <CreateAccount />
      </View>
      <Divider style={style.divider} />
      <Text>Social Login</Text>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
  );
}

function CreateAccount() {
  const navigation = useNavigation();
  return (
    <Text style={style.textRegister}>
      ¿Aún no tienes cuenta?{" "}
      <Text
        style={style.btnRegister}
        onPress={() => navigation.navigate("register")}
      >
        Regístrate
      </Text>
    </Text>
  );
}

const style = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});
