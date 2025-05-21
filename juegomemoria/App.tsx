import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import JuegosProvider from './src/Provider/JuegosProvider';
import HomeScreen from './screens/HomeScreen';
import PartidasScreen from './screens/PartidasScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <JuegosProvider>
          <Home></Home>
      </JuegosProvider>
      
    </View>
  );
}



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <JuegosProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen} 
                        options={{ title: 'Juego de Memoria' }}
                    />
                    <Stack.Screen 
                        name="Partidas" 
                        component={PartidasScreen} 
                        options={{ title: 'Historial de Partidas' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </JuegosProvider>
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
