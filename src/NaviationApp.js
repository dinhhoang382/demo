import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen_A from './ScreenA';
import Screen_B from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const NaviationApp = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) =>({
                tabBarIcon:({focused, size, color}) =>{
                    let iconName;
                    if(route.name === 'Screen_A'){
                        iconName = 'angle-double-right'
                    }else if(route.name === 'Screen_B'){
                        iconName = 'angle-double-left'
                    }
                    return(
                        <FontAwesome5 
                        name={iconName}/>
                    )
                }
            })
            }
            >
                <Tab.Screen name='Screen_A' component={Screen_A} />
                <Tab.Screen name='Screen_B' component={Screen_B} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default NaviationApp