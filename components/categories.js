import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CategoryCard } from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        {/*Category Card*/}
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hi"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hi"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hi"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hi"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hi"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hi"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hi"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title= "hi"/>
    </ScrollView>
  )
}

export default Categories