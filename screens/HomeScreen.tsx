import { StatusBar } from 'expo-status-bar';
import { View, Text,ScrollView,  StyleSheet, TextInput, ImageBackground, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons  } from "@expo/vector-icons";
import COLORS from '../constants/colors';
import places from "../constants/places";

const devWidth = Dimensions.get("screen").width;




const HomeScreen = ({navigation}: any) => {
  const categoryIcons = [
    <MaterialIcons name='flight' color={COLORS.primary} size={25}/>,
    <MaterialIcons name='beach-access' color={COLORS.primary} size={25}/>,
    <MaterialIcons name='near-me' color={COLORS.primary} size={25}/>,
    <MaterialIcons name='place' color={COLORS.primary} size={25}/>
  ];
  
  
  const ListCategories = () => {
    return (
      <View style={styles.categoryContainer}>
        {categoryIcons.map((icon, index) => (    
          <View key={index} style={styles.iconContainer}>{icon}</View>
        ))}
      </View>
    )
  }
  
  
  const Card = ({place}: any) => {
     return (
  
        <TouchableOpacity activeOpacity={0.8} onPress ={()=> navigation.navigate('Details', place) }>
         <ImageBackground style={styles.cardImage} source={place.image}>
          <Text style={{
            color: COLORS.white,
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10
            }}>
              {place.name}
            </Text>
          <View style={{flex: 1, 
            justifyContent: "space-between", 
            alignItems: "flex-end", flexDirection: "row"}}>
            <View style={{flexDirection: "row"}}>
               <MaterialIcons name='location-pin' color={COLORS.white} size={20}/>
               <Text style={{color:COLORS.white, marginLeft: 5}}>{place.location}</Text>
            </View>
            
            <MaterialIcons name='star' color={COLORS.white} size={20}/>
          </View>  
        </ImageBackground>
      </TouchableOpacity>
     )
  }
  
  
  const RecommendedCard = ({place}: any) => {
     return(
         <ImageBackground style={styles.rmCardImage} source={place.image}>
            <Text style={{
              color: COLORS.white, 
              fontSize: 22,
              fontWeight: "bold",
               marginTop: 10 }}>
                {place.name}
                </Text>
        
  
          <View style={{flex: 1, justifyContent: "space-between"}}>
            <View style={{width: "100%", flexDirection: "row"}}>
               <View style={{flexDirection: "row"}}>
                 <MaterialIcons name='location-pin' color={COLORS.white} size={20}/>
                 <Text style={{color:COLORS.white}}>{place.location}</Text>
              </View> 
  
             <View style={{flexDirection: "row",marginLeft: 5}}>
                  <MaterialIcons name='star' color={COLORS.white} size={20}/>
                  <Text style={{color:COLORS.white, marginLeft: 5}}>5.0</Text>
                </View>
                
              </View>
                <Text style={{color:COLORS.white, fontSize: 13, marginLeft: 5}}>{place.details}</Text>
              </View> 
          </ImageBackground>
     )
  }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View style={styles.header}>
             <MaterialIcons name='sort' color={COLORS.white} size={28}/>
             <MaterialIcons name='notifications-none' color={COLORS.white} size={28}/>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.scrollView}>
                 <View>
                   <Text style ={{color: COLORS.white, fontSize: 23 }}>Explore the</Text>
                   <Text style ={{color: COLORS.white, fontSize: 23}}>beautiful places</Text>
                   <View style={styles.inputContainer}>
                      <MaterialIcons name='search' size={28}/>
                      <TextInput placeholder="Search place" style={{color: COLORS.grey}}/>
                   </View>
                 </View>
                   
                  </View>
                  <ListCategories />
                  <Text style={styles.sectionTitle}>Places</Text>
                  <View>
                    <FlatList
                      contentContainerStyle={{paddingLeft: 20}} 
                     data={places} 
                     renderItem={({item}) => <Card place={item}/>}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     />
                     <Text style={styles.sectionTitle}>Recommended</Text>
                     <FlatList 
                     contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
                     snapToInterval={devWidth - 20}
                     data={places} 
                     renderItem={({item}) => <RecommendedCard place={item} />}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     />
                  </View>
          </ScrollView>
          <StatusBar translucent={false} backgroundColor= {COLORS.primary}/>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
   
    header: {
       paddingVertical: 20,
       paddingHorizontal: 20,
       flexDirection: "row",
       justifyContent: "space-between",
       backgroundColor: COLORS.primary
    },
    scrollView: {
      paddingHorizontal: 20,
      height: 120,
      backgroundColor: COLORS.primary,

    },
    inputContainer: {
      height: 60,
      width: "100%",
      backgroundColor: COLORS.white,
      borderRadius: 10,
      position: 'absolute',
      top: 90,
      flexDirection: 'row',
      paddingHorizontal: 20,
      alignItems: 'center',
      elevation:12,
    },
    categoryContainer: {
      marginTop: 60,
      marginHorizontal: 20,
      flexDirection: "row",
      justifyContent:"space-between"
    }, 
     iconContainer: {
       width: 60,
       height: 60,
       backgroundColor: COLORS.secondary,
       justifyContent: "center",
       alignItems: "center",
       borderRadius: 10
       
     },
     sectionTitle: {
       marginHorizontal: 20,
       marginVertical: 20,
       fontWeight: "bold",
       fontSize: 20,
     },
     cardImage: {
      height: 220,
      width: devWidth / 2,
      marginRight: 20,
      padding: 10,
      overflow: "hidden",
      borderRadius: 10,
     }, 
     rmCardImage: {
        width: devWidth - 40,
        height: 200,
        marginRight: 20,
        borderRadius: 10,
        overflow: "hidden",
        padding: 10

     }
  });

  export default HomeScreen;