import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

export default class ReceitaModo extends Component {
	render() {
		const { route } = this.props;
    const { recipe } = route.params;

		return(
			<View style={styles.areaTab}>
				<FlatList
					style={styles.list}
					data={recipe.modo}
					keyExtractor={(item) => item.key.toString()}
					renderItem={({ item }) => <Text style={styles.item}>{item.txt}</Text>}
				/>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	areaTab:{
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	},
	list:{
		width: '100%',
    padding: 16,
	},
	item:{
		fontSize: 16,
    marginBottom: 8,
	}
});