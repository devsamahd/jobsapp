import React, { useState } from 'react'
import { View, Text, TextInput, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SIZES, icons } from '../../../constants'
const jobTypes = ["Full-time","Part-time","Contractor"]
const Welcome = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Samahd,</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value={search} onChange={()=>setSearch()} placeholder='Search for ajob' />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image source={icons.search} style={styles.searchBtnImage} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
        data={jobTypes} 
        renderItem={({item})=> (
          <TouchableOpacity onPress={()=>{
            setActiveJobType(item)
            router.push(`/search/${item}`)
            }} style={styles.tab(activeJobType, item)}>
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity> 
        )} />
      </View>
    </View>
  )
}

export default Welcome