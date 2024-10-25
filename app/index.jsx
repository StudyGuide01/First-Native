import React, { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/about'); // Navigate to About page after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [router]);

  return (
    <View>
      <Text>Home</Text>
      <Link href='/about' asChild>
        <Pressable>
          <Text>Go to About page</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Home;
