import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DashboardScreen, FinanceScreen, ProfileScreen, TravelScreen, UniversityScreen } from '../Screens'
import { MaterialCommunityIcons, MaterialIcons,Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export function PrivateRoutes() {
    return (
        <Tab.Navigator initialRouteName="Dashboard">
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <MaterialIcons name="dashboard" size={24} color="#005452" />
                        }
                        return <MaterialCommunityIcons name="view-dashboard-outline" size={24} color="#93C2C4" />
                    },
                }}
            />

            <Tab.Screen
                name="Travel"
                component={TravelScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="md-airplane" size={24} color="#005452" />
                        }
                        return <Ionicons name="md-airplane-outline" size={24} color="#93C2C4" />
                    },
                }}
            />

            <Tab.Screen
                name="University"
                component={UniversityScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="school-sharp" size={24} color="#005452" />
                        }
                        return <Ionicons name="school-outline" size={24} color="#93C2C4" />
                    },
                }}
            />

            <Tab.Screen
                name="Finance"
                component={FinanceScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="md-cash-sharp" size={24} color="#005452" />
                        }
                        return <Ionicons name="md-cash-outline" size={24} color="#93C2C4" />
                    },
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="person-circle-sharp" size={24} color="#005452" />
                        }
                        return <Ionicons name="person-circle-outline" size={24} color="#93C2C4" />
                    },
                }}
            />

        </Tab.Navigator>
    )
}