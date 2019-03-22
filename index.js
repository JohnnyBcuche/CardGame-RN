import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/Header';
import ComponentList from './src/ComponentList';

const App = () => (
	<View style={{ flex:1 }}>
		<Header headerText={'Card Game'} />
		<ComponentList />
	</View>
);

AppRegistry.registerComponent('cards', () => App);
