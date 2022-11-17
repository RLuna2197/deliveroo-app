import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categories  from "../components/categories";
export default function HomeScreen() {
    const navigation = useNavigation();
    
    /* Disable default header */
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    
  return (
    <SafeAreaView className="bg-white pt-5">
        { /*Header*/ }
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-7 h-7 bg-gray-300 rounded-full p-4"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text>Current Location
            <ChevronDownIcon size={20} color="#00CCBB"/>
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB"/>
        </View>

        {/*Search*/}
        <View className="flex-row space-x-2 pb-4 items-center mx-3 pt-2">
          <View className="flex-row flex-1 space-x-2 items-center bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20}/>
            <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>

        {/*Body*/}
        <ScrollView className="bg-gray-200" 
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
            {/*Categories*/}
            <Categories/>

        </ScrollView>
    </SafeAreaView>
    

  )
}