import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import { COLORS } from './src/styles/colors/colors/';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <StatusBar style="light" />

            
      <LogIn />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
