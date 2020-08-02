import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const CategoryRecipesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Category Recipes Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryRecipesScreen;