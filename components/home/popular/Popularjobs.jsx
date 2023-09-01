import { useState } from 'react'
import useFetch from '../../../hook/useFetch'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const {data, isLoading, error} = useFetch('search',{
    query: 'React Developer',
    num_pages: 1
  })
  const router = useRouter()
  return (
    <View style= {styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? <ActivityIndicator size="large" color={COLORS.primary} /> : error? <Text>Something is wrong</Text> :
         <FlatList
          data={data}
          renderItem={({item})=>(
            <PopularJobCard item={item} />
          )}
          keyExtractor={item => item.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
         >

         </FlatList>
         }
      </View>
    </View>
  )
}

export default Popularjobs