import { createStackNavigator } from '@react-navigation/stack';
import { PrivateRoutes } from './PrivateRoutes';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <>
            <PrivateRoutes />
        </>
    );
}