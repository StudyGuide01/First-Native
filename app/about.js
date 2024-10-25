import axios from 'axios';
import { Link } from 'expo-router';
import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';

export default function About() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post('http://192.168.x.x:4000/user', { name: "javed" });
        console.log(res.data); // Log the response data
      } catch (error) {
        console.error('Error fetching data:', error); // Handle any errors
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>This is the About page</Text>
      <Link href='/' asChild>
        <Pressable>
          <Text>Go to Home page</Text>
        </Pressable>
      </Link>
    </View>
  );
}
