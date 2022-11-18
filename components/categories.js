import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CategoryCard } from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        {/*Category Card*/}
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hola mundo"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hola mundo"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hola mundo"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hola mundo"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hola mundo"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hola mundo"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hola mundo"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hola mundo"/>
    
    </ScrollView>
  )
}

export default Categories