import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabThreeScreen() {
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
        <ThemedText type="title">When should you inspect your bees?</ThemedText>
      </ThemedView>
      <ThemedText>These are some important questions that people may ask..</ThemedText>
      <Collapsible title="What temperature is too hot for inspecting my bees?">
        <ThemedText>
        Inspection during the heat of the day, You can't leave combs out in the hot sun (90+ degrees) or they can begin to melt, and working a hive in very hot temperatures in the full sun is very uncomfortable for you and the bees.{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="What temperature is too cold for bees?">
        <ThemedText>
        If the relative temperature around the hive is at least 50℉, you are safe to open it up and scope out your ladies. However, if it's any colder than that, you will need to limit your visit to an external-only inspection.{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
      </Collapsible>
      <Collapsible title="When is it too windy for inspections?">
        <ThemedText>
        Bees fly at a speed of about 15 MPH (24.14 KPH). As a general rule of thumb, any wind speed above that is too much. Even then, you may carry out a beehive inspection in faster winds up to a limit. <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
          
        </ThemedText>
        
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Is it ok for it to be raining while I'm inspecting my hive?">
        <ThemedText>
         Inspecting hives on a rainy day is a big beekeeping no-no. Why? Well, bees keep a very controlled environment in their hives. Their homes are climate controlled down to the degree, and they're not fans of their space being sullied. <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            
          </ThemedText>
        </ThemedText>
        <ExternalLink href="">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Is it ok for me to inspect my hive during night?">
        <ThemedText>
        The middle of the day is the best time to go into the bee hive. The forager bees will be out collecting nectar and pollen, meaning that there will be fewer bees in the hive. If you check the hive early in the morning or at night, there will be many more bees in there.{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Is ok to inpcet my hive during the winter?">
        <ThemedText>
        I always encourage beekeepers to check their hives at least 1 time per month during the winter. Here are some parameters around when to inspect: Inspections lasting less than 1 minute, breaking boxes apart and feeding or looking at the cluster, but not pulling out frames- Make sure the temperature is above 32 degrees.{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
           <ThemedText type="defaultSemiBold"></ThemedText> 
          
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
