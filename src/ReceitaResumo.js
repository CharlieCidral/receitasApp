import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ReceitaResumo extends Component {
	render() {
		const { route } = this.props;
    const { recipe } = route.params;

		return(
			<View style={styles.areaTab}>
				<Text style={styles.nome}>{recipe.nome}</Text>
				<Text style={styles.por}>Por: {recipe.por}</Text>
				<Text style={styles.descricao}>{recipe.descricao}</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	areaTab:{
		flex:1,
		margin:10
	},
	nome:{
		fontSize:26,
		marginBottom:10
	},
	por:{
		marginBottom:10,
		color:'#FF0000'
	},
	descricao:{

	}
});