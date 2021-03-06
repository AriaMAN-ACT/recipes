import React from 'react';
import {StyleSheet, View, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import HeaderButton from '../components/HeaderButton';
import {CATEGORIES} from "../data/data";

const CategoriesScreen = ({navigation: {navigate}}) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigate({
                routeName: 'CategoryRecipes',
                params: {
                    id: itemData.item.id
                }
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

CategoriesScreen.navigationOptions = ({navigation: {toggleDrawer}}) => ({
    headerTitle: 'Categories',
    headerStyle: {
        backgroundColor: '#0fbcf9'
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
    },
    gridItem: {
        width: Dimensions.get('window').width / 2 - 20,
        height: Dimensions.get('window').width / 2 - 40,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 10,
        borderRadius: 20,
        elevation: 13,
        shadowOpacity: 0.26,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 20,
        padding: 20
    },
    category: {
        color: '#f5f6f7',
        fontFamily: 'libre-baskerville-bold',
        fontSize: 18
    }
});

export default CategoriesScreen;