import { createStackNavigator } from '@react-navigation/stack';

import {LoginScreen, ForgotPasswordScreen} from '../Screens'
const Stack = createStackNavigator();

export function PublicRoutes() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}