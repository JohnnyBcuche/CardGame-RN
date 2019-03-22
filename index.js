import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import ComponentList from './src/components/ComponentList';

const App = () => (
	<View style={{ flex:1 }}>
		<Header headerText={'Card Game'} />
		<ComponentList />
	</View>
);

AppRegistry.registerComponent('cards', () => App);
