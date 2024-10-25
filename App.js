import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Hello World With Jk</Text>
      <StatusBar style="auto" />
      <Link href="/about" asChild>
        <Pressable onPress={() => {
          if (router.isReady) {
            router.push('/about');
          }
        }}>
          <Text>Go to about</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
