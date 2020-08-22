import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {useSelector} from "react-redux";

import HeaderButton from '../components/HeaderButton';
import {RECIPES, CATEGORIES} from "../data/data";
import Recipe from "../components/Recipe";

const FavoriteRecipesScreen = ({navigation: {navigate}}) => {
    const favoriteRecipeIds = useSelector(({favoriteRecipes}) => favoriteRecipes);

    const favoriteRecipes = RECIPES.filter(({id}) => favoriteRecipeIds.includes(id));

    return (
        <View style={styles.screen}>
            <FlatList data={favoriteRecipes} keyExtractor={item => item.id}
                      renderItem={props =>
                          <Recipe navigate={navigate}
                                  category={CATEGORIES.find(({id}) => props.item.categoryIds[0] === id)}
                                  {...props}/>}/>
        </View>
    );
};

FavoriteRecipesScreen.navigationOptions = ({navigation: {toggleDrawer}}) => ({
    headerTitle: 'Favorite Recipes',
    headerStyle: {
        backgroundColor: '#9980FA'
    },
    headerTintColor: '#f5f6f7',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="menu" iconName="ios-menu" onPress={() => toggleDrawer()}/>
        </HeaderButtons>
    )
});

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoriteRecipesScreen;