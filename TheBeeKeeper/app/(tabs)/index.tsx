import { Image, StyleSheet, Platform , TextInput} from 'react-native';
import { useEffect, useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import axios from 'axios';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  const [zip, setZip] = useState('43506');
  const [data, setData] = useState('');
  const [tempResult, setTempResult] = useState('');
  const [windResult, setWindResult] = useState('');
  const API_KEY = '5811f53d6d4e41fa8f7225002241908';
  const ENDPOINT = 'http://api.weatherapi.com/v1/current.json';
  // 60 degrees Fahrenheit.
  // 98.6 way to hot
 
  const LOW_TEMP = '60';
  const HIGH_TEMP = '90.6';
const HIGH_WIND = '15';
const WARNING_WIND = '2.25';

  useEffect(()=>{
    let isMounted=true;

    const fetchWeather = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}?key=${API_KEY}&q=${zip}&aqi=no`);
        if (isMounted){
          setData(response.data);
          compareTemp(response.data.current.temp_f)
          compareWind(response.data.current.wind_mph)
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchWeather();

    return () => {
      isMounted=false;
    }

  },[zip]);

  const compareTemp = (temp:number|null) => {
    if (temp !== null) {
      if (temp < LOW_TEMP) {
        setTempResult('Too Low');
      } else if (temp > HIGH_TEMP) {
        setTempResult('Too High');
      } else {
        setTempResult('just right')
      }
    }
  }
  const compareWind = (wind:number|null) => {
    if (wind !== null) {
      if (wind > HIGH_WIND) {
        setWindResult('Too Windy');
      } else if (wind > WARNING_WIND) {
        setWindResult('May be windy');
      } else {
        setWindResult('just right')
      }
    }
  }
  console.log(data);
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/HeadingImage.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome To The Bee Keeper</ThemedText>
        <HelloWave />
       
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">To see if today is a good day to inspect hive enter in zip code</ThemedText>
        <TextInput
        style={styles.inputDark}
        onChangeText={setZip}
        value={zip}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
        <ThemedText>
          - <ThemedText type="defaultSemiBold"></ThemedText> 
          {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
        Weather will show below
        </ThemedText>
      </ThemedView>
      {data ?
      <>
      <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">Current Location {data.location.name} {data.location.region}</ThemedText>
     
      <ThemedText>
        tempiture={data.current.temp_f} / {tempResult}
      </ThemedText>
    </ThemedView>
    <ThemedView style={styles.stepContainer}>
    
    <ThemedText>
      Wind={data.current.wind_mph} / {windResult}
    </ThemedText>
  </ThemedView>
  </>
    : null}
      
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
    height: 250,
    width: 395,
    bottom: 0,
    left: 0,
  },
  inputDark: {
    color: '#ffffff',
    borderWidth: 3,
    borderColor: '#ffffff',
    paddingHorizontal:10,
    paddingVertical:5,
    backgroundColor: '#333333'
  }
});
