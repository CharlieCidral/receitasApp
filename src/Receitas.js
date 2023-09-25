import React, { Component } from 'react';
import { TouchableHighlight, Image, View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ReceitaResumo from './ReceitaResumo';
import ReceitaIngredientes from './ReceitaIngredientes';
import ReceitaModo from './ReceitaModo';

const Tab = createMaterialTopTabNavigator();

export default class Receitas extends Component {
	render() {
		const { route } = this.props;
    const { recipe } = route.params;

    // Use the recipe's image as the header background
    this.props.navigation.setOptions({
      headerBackground: () => (
        <Image
          source={{ uri: recipe.imagem }}
          style={styles.headerBackgroundImage}
        />
      ),
    });
		return (
			<Tab.Navigator initialRouteName="Resumo" style={styles.container}>
				<Tab.Screen
					name="Resumo"
					component={ReceitaResumo}
					initialParams={{ recipe: this.props.route.params.recipe }}
				/>
				<Tab.Screen
					name="Ingredientes"
					component={ReceitaIngredientes}
					initialParams={{ recipe: this.props.route.params.recipe }}
				/>
				<Tab.Screen
					name="Preparo"
					component={ReceitaModo}
					initialParams={{ recipe: this.props.route.params.recipe }}
				/>
			</Tab.Navigator>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		marginTop:136
	},
	headerBackgroundImage:{
    width: '100%',
    height: 200,
    resizeMode: 'cover',
	}
});