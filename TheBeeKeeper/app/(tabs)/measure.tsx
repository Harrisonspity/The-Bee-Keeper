import { Image, StyleSheet, Platform , TextInput} from 'react-native';
import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  //
  const [skinny, setSkinny] = useState('');
  const [deep, setDeep] = useState('');
  const [total, setTotal] = useState('0');

  useEffect(()=>{
    setTotal((skinny*40) + (deep*70))
 
  },[skinny, deep]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f2d469', dark: '#f2d469' }}
      headerImage={
        <Image
          source={require('@/assets/images/Heading2.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Measure</ThemedText>
      </ThemedView>
      <ThemedText>
        Put in amout of full supers \/
      </ThemedText>
      <TextInput
        style={styles.inputDark}
        onChangeText={setSkinny}
        value={skinny}
        placeholder="Put in Super"
        keyboardType="numeric"
      />
      <ThemedText>
        Put in amout of full deeps \/
      </ThemedText>
            <TextInput
        style={styles.inputDark}
        onChangeText={setDeep}
        value={deep}
        placeholder="Put in Deep"
        keyboardType="numeric"
      />
      <ThemedText>
        Below will show the estimated amout of honey you harvested in pounds
      </ThemedText>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Amount of Honey: {total} {total ? 'lbs.' : null}</ThemedText>
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
