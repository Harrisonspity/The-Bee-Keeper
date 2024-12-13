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
            <ThemedText>These are some important questions that people may ask.</ThemedText>
            <Collapsible title="What temperature is too hot for inspecting my bees?">
                <ThemedText>
                    During the heat of the day, you can't leave combs out in the hot sun (90+ degrees) or they can begin to melt. Working a hive in very hot temperatures in the full sun is very uncomfortable for both you and the bees.
                </ThemedText>
            </Collapsible>
            <Collapsible title="What temperature is too cold for bees?">
                <ThemedText>
                    If the relative temperature around the hive is at least 50°F, you are safe to open it up and inspect your bees. However, if it's any colder than that, you will need to limit your visit to an external-only inspection.
                </ThemedText>
            </Collapsible>
            <Collapsible title="When is it too windy for inspections?">
                <ThemedText>
                    Bees fly at a speed of about 15 MPH (24.14 KPH). As a general rule of thumb, any wind speed above that is too much. Even then, you may carry out a beehive inspection in faster winds up to a limit.
                </ThemedText>
            </Collapsible>
            <Collapsible title="Is it okay to inspect my hive while it's raining?">
                <ThemedText>
                    Inspecting hives on a rainy day is a big beekeeping no-no. Why? Well, bees keep a very controlled environment in their hives. Their homes are climate controlled down to the degree, and they're not fans of their space being sullied.
                </ThemedText>
            </Collapsible>
            <Collapsible title="Is it okay to inspect my hive during the night?">
                <ThemedText>
                    The middle of the day is the best time to inspect the beehive. The forager bees will be out collecting nectar and pollen, meaning there will be fewer bees in the hive. If you check the hive early in the morning or at night, there will be many more bees present.
                </ThemedText>
            </Collapsible>
            <Collapsible title="Is it okay to inspect my hive during the winter?">
                <ThemedText>
                    I always encourage beekeepers to check their hives at least once per month during the winter. Here are some parameters around when to inspect: For inspections lasting less than 1 minute, breaking boxes apart and feeding or looking at the cluster, but not pulling out frames - make sure the temperature is above 32 degrees.
                </ThemedText>
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
    reactLogo: {
        height: 250,
        width: 395,
        bottom: 0,
        left: 0,
    },
});