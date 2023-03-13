import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons  } from "@expo/vector-icons";
import COLORS from "../constants/colors";

const DetailsScreen = ({navigation, route}:any) => {
    const place = route.params;

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
             <ImageBackground source={place.image} style={{flex: 0.7}}>
                <View style={styles.header}>
                  <MaterialIcons 
                  name="arrow-back-ios" 
                  size={28}
                  style={{color:COLORS.white}} 
                  onPress={() => navigation.goBack()}/>

                  <MaterialIcons 
                   name="more-vert" 
                   size={28}
                   style={{color:COLORS.white}} 
                   onPress={() => navigation.goBack()}/>
                </View>
                
                <View style={styles.imageDetails}>
                    <Text style={{
                     width: "70%", 
                     fontSize: 30, 
                     fontWeight: "bold", 
                     color:COLORS.white,
                     marginBottom: 20
                     }}>
                     {place.name}
                    </Text>

                   <View style={{flexDirection: "row"}}>
                    <MaterialIcons name="star" size={30} color={COLORS.orange}/>
                    <Text style={{
                          color: COLORS.white, 
                          fontWeight: "bold",
                          fontSize: 20}}>
                            5.0
                     </Text>
                   </View>

               </View>
            </ImageBackground>
             <StatusBar backgroundColor= "rgba(0,0,0,0)"/>
             <View style={styles.detailsContainer}>
                <View style={styles.iconContainer}>
                    <MaterialIcons name="favorite" color={COLORS.red} size={30} />
                </View>
                <View style={{flexDirection: "row"}}>
                    <MaterialIcons name="location-pin" color={COLORS.primary} size={28} />
                    <Text style={{color: COLORS.primary, fontSize: 20, fontWeight: "bold"}}>{place.location}</Text>
                </View>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 20, marginTop: 15}}>About the trip</Text>
                <Text style={{marginTop: 20}}>{place.details}</Text>
                
             </View>
             <View style={styles.footer}>
                <View style={{flexDirection: "row"}}>
                    <Text style={{color: COLORS.white, 
                        fontSize: 18, fontWeight: "bold"}}>$100</Text>
                    <Text style={{color: COLORS.grey, 
                        fontSize: 14, marginLeft: 2, fontWeight: "bold"}}>/PER DAY</Text>
                </View>
                
                <View style={styles.bookNowBtn}>
                   <Text style={{color:COLORS.primary, fontSize: 16, fontWeight: "bold"}}>Book Now</Text>
                </View>
             </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },

    imageDetails: {
        padding: 20,
        justifyContent: "space-between",
        width: "100%",
        position: "absolute",
        bottom: 30,
        flexDirection: "row",

    },

    detailsContainer: {
        flex: 0.3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        top: -30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
    },

    iconContainer: {
        width: 60,
        height: 60,
        position: "absolute",
        top: -30,
        right: 20,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
    },
    footer: {
        flexDirection: "row",
        backgroundColor: COLORS.primary,
        height: 70,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal:20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    bookNowBtn: {
          height: 50,
          width: 150,
          backgroundColor: COLORS.white,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center"
    }
});


export default DetailsScreen;