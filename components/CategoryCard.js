import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

export const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity>
        <Image source={{
            uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
        />
         <Text className="absolute bottom-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}
