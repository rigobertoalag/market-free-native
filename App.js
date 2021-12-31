import React from 'react';
import { View, Text } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//Drawer
import Home from './market/index.js'
import Categories from './market/categories/index.js';
import Items from './market/items/index.js'

//Stack
import ItemDetail from './market/items/ItemDetail.jsx';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Test() {
  return (
    <View><Text>Hola desde test</Text></View>
  )
}

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}
        options={{
          headerTitle: () => (
            <View style={{ width: 250 }}>
              <View style={{ borderWidth: 2, borderRadius: 100, padding: 6, flexDirection: 'row' }}>
                <MaterialIcons name="search" size={18} color='black' style={{ marginRight: 10, marginLeft: 5 }} />
                <Text>Buscar</Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <MaterialIcons name="shopping-cart" size={28} color='black' style={{ marginRight: 20 }} />
          ),
        }}
      />
      <Drawer.Screen name="Categories" component={Categories}
        options={{
          headerTitle: () => (
            <View style={{ width: 250 }}>
              <View style={{ borderWidth: 2, borderRadius: 100, padding: 6, flexDirection: 'row' }}>
                <MaterialIcons name="search" size={18} color='black' style={{ marginRight: 10, marginLeft: 5 }} />
                <Text>Buscar</Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <MaterialIcons name="shopping-cart" size={28} color='black' style={{ marginRight: 20 }} />
          ),
        }}
      />
      <Drawer.Screen name="Items" component={Items}
        options={{
          headerTitle: () => (
            <View style={{ width: 250 }}>
              <View style={{ borderWidth: 2, borderRadius: 100, padding: 6, flexDirection: 'row' }}>
                <MaterialIcons name="search" size={18} color='black' style={{ marginRight: 10, marginLeft: 5 }} />
                <Text>Buscar</Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <MaterialIcons name="shopping-cart" size={28} color='black' style={{ marginRight: 20 }} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}