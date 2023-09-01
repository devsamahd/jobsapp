import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style'
import useFetch from '../../../hook/useFetch'
import { COLORS, SIZES } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { useRouter } from 'expo-router'

const Nearbyjobs = () => {
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
         data?.map((job)=> <NearbyJobCard job={job} key={job?.job_id} handleNavigate={()=> router.push(`  /job-details/${job.job_id}`)} />)
         }
      </View>
    </View>
  )
}

export default Nearbyjobs