import { Image, StyleSheet, Platform, View, TextInput} from 'react-native';
import { useEffect, useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import axios from 'axios';

export default function HomeScreen() {
  const [zip, setZip] = useState('');
  const [data, setData] = useState('');
  const [tempResult, setTempResult] = useState('');
  const [windResult, setWindResult] = useState('');
  const [rainResult, setRainResult] = useState('');
  const API_KEY = '5811f53d6d4e41fa8f7225002241908';
  const ENDPOINT = 'http://api.weatherapi.com/v1/current.json';
  // 60 degrees Fahrenheit.
  // 98.6 way to hot
 
  const LOW_TEMP = '60';
  const HIGH_TEMP = '90.6';
  const HIGH_WIND = '15';
  const WARNING_WIND = '2.25';
  const HIGH_RAIN = '0.0';

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
  const compareRain = (rain:number|null) => {
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

  const inspectResult = (windResult, rain, tempResult) => {
    if (wind !== null && rain !== null && temp !== null) {
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
      headerBackgroundColor={{ light: '#f2d469', dark: '#f2d469' }}
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
        <ThemedText type="subtitle">Step 1-Enter in your zip code</ThemedText>
        <TextInput
        style={styles.inputDark}
        onChangeText={setZip}
        value={zip}
        placeholder="Put in zip code"
        keyboardType="numeric"
      />
        <ThemedText>
        Your zip code will determine if it is safe to inspect your hives
        </ThemedText>
      </ThemedView>
      {data ?
      <>
      <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">Current Location {data.location.name} {data.location.region}</ThemedText>
      <View>
        
      </View>
      <ThemedText type="defaultSemiBold">{data.current.condition.text}  </ThemedText>
      <Image style={styles.icon} source={{ uri: 'https:'+data.current.condition.icon}} />
      <ThemedText type="defaultSemiBold">{data.current.precip_in} inches of rain per hour</ThemedText>
      <ThemedText type="defaultSemiBold">
        {data.current.temp_f} degrees outside / {tempResult}
      </ThemedText>
      <ThemedText type="defaultSemiBold">
        {data.current.wind_mph} MPH Windshield / {windResult}
      </ThemedText>
    </ThemedView>
    <ThemedView style={styles.stepContainer}>
    
    
  </ThemedView>
  </>
    : null}
      
      
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
  icon: {
    height: 40,
    width: 40,
    position: 'relative'
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
