// CivicSnap React Native App (Expo)
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  const BACKEND_URL = "https://civic-snap.netlify.app/.netlify/functions/report";
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20}}>CivicSnap is Ready 🚀</Text>
      <Text>Backend: {BACKEND_URL}</Text>
    </View>
  );
}
