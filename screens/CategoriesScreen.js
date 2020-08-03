import React from 'react';
import {StyleSheet, View, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';

import {CATEGORIES} from "../data/data";

const CategoriesScreen = ({navigation: {navigate}}) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigate({
                routeName: 'CategoryRecipes'
            })} style={{...styles.gridItem, backgroundColor: itemData.item.color}}>
                <View>
                    <Text style={styles.category}>{itemData.item.title.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} keyExtractor={(item) => item.id}/>
        </View>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Categories',
    headerStyle: {
        backgroundColor: '#ffa502'
    },
    headerTintColor: '#f5f6f7'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        width: '50%',
        height: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    category: {
        color: '#f5f6f7',
        fontFamily: 'libre-baskerville-bold',
        fontSize: 18
    }
});

export default CategoriesScreen;