import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import ItemDetail from './src/Screens/ItemDetail';
import ItemsList from './src/Screens/ItemList';
import Menu from './src/Screens/Menu';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Menu' component={Menu} />
        <Stack.Screen name='ItemsList' component={ItemsList} />
        <Stack.Screen name='ItemDetail' component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
