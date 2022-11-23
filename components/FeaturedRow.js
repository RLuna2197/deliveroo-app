import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { RestaurantCard } from './RestaurantCard'

export const FeaturedRow = ({id, title, description  }) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4"> 
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>

        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        <ScrollView 
        className="pt-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}>
          {/* RestaurantCard */}
          <RestaurantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Suchitoo"
            rating={4.5}
            genre="Japanese"
            address="SoyaBronx"
            short_description="This is a description"
            dishes={[]}
            long={20}
            lat={0}
    />

<RestaurantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Suchitoo"
            rating={4.5}
            genre="Japanese"
            address="SoyaBronx"
            short_description="This is a description"
            dishes={[]}
            long={20}
            lat={0}
    />
    <RestaurantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Suchitoo"
            rating={4.5}
            genre="Japanese"
            address="SoyaBronx"
            short_description="This is a description"
            dishes={[]}
            long={20}
            lat={0}
    />
        </ScrollView>
    </View>
  )
}
