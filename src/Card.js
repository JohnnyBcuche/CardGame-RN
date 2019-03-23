import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	return (
		<View style={style.containerStyle}>
			{props.children}
		</View>
	);
};

const style = {
	containerStyle: {
		elevation: 1,
		marginRight: 5,
		marginLeft: 5,
		marginTop: 10
	}
};

export default Card;
