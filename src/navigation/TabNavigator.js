import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors/colors';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const iconColorPrimary = COLORS.buttonPrimary;
  const iconColorSecondary = 'grey';
  const iconSize = 25;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" color={focused ? iconColorPrimary : iconColorSecondary} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="search" color={focused ? iconColorPrimary : iconColorSecondary} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="heart" color={focused ? iconColorPrimary : iconColorSecondary} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="cart" color={focused ? iconColorPrimary : iconColorSecondary} size={iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    height: 120,
    backgroundColor: 'white',
    justifyContent: 'center', // Center the icons vertically
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'grey',
    shadowRadius: 0.25,
    shadowOpacity: 0.25,
  },
});

export default TabNavigator;
