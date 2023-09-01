import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import {COLORS, SIZES} from '../../constants'

const AppDetails = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite}, 
                headerShadowVisible:false,
                headerTitle: ""
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex:1,
                    padding: SIZES.medium
                }}>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
  )
}

export default AppDetails