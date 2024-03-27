import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/login/LoginScreen';
import { RegisterScreen } from '../screens/register/RegisterScreen';

export type RootStackParamsList = {
    LoginScreen: undefined,
    RegisterScreen: undefined
}

const Stack = createStackNavigator<RootStackParamsList>();

export const MainAppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );
}