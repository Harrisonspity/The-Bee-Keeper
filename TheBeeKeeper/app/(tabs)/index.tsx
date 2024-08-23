import { Image, StyleSheet, Platform , TextInput} from 'react-native';
import { useEffect, useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import axios from 'axios';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  const [zip, setZip] = useState('12345');
  
  useEffect(()=>{
    axios.get("http://api.weatherapi.com/v1/current.json?key=5811f53d6d4e41fa8f7225002241908&q=43506&aqi=no")
    .then((response)=>setZip(response.data)).catch((err)=>console.log(err)) 
  
  },[]);

  const resderUserCard =({item})=>{
    return(
      <View style={styles.card}>
        <text style={styles.location}>{item.location}</text>
        <text style={styles.temp_f}>{item.temp_f}</text>
        <text style={styles.username}>{item.username}</text>
        <text style={styles.website}>{item.website}</text>
      </View>
    )
  }
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome To The Bee Keeper</ThemedText>
        <HelloWave />
        <TextInput
      
        onChangeText={setZip}
        value={zip}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{zip}</ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Put Zip Code here</ThemedText> 
          {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
        to see weather
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
