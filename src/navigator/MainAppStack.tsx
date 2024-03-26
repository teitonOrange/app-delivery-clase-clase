import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';

const Stack = createStackNavigator();

export const MainAppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
        >
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}