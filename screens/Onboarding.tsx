import { StatusBar } from 'expo-status-bar';
import { View, Text,  StyleSheet, ImageBackground, Button, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";

const Onboarding = ({navigation}: any) => {
    return (
    <View style={{flex: 1}}>
        <ImageBackground style={{flex: 1}} source={require("../assets/skulls.jpg")}>
            <View style={styles.detail}>
                <Text style={{color: COLORS.white, fontSize: 35, fontWeight: "bold"}}>Discover</Text>
                <Text style={{color: COLORS.white, fontSize: 35, fontWeight: "bold"}}>world with us</Text>
                <Text style={{color: COLORS.white, lineHeight: 25, marginTop: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
           <View style={styles.button}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Home')}>
              <Text style={{fontWeight: "bold"}}>Get Started</Text>
            </TouchableOpacity>
            
           </View>
            </View>
        </ImageBackground>
        <StatusBar backgroundColor= "rgba(0,0,0,0)"/>
    </View>
    )
}

const styles = StyleSheet.create({
    detail: {
       height: "50%",
       position: 'absolute',
       bottom:0,
       paddingHorizontal: 40

    },
    button: {
     height: 50,
     width: 120,
     backgroundColor: COLORS.white,
     borderRadius: 8,
     marginTop: 15,
     justifyContent: "center",
     alignItems: "center"
    },
   
})
export default Onboarding;