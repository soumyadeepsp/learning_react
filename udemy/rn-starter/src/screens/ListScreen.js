import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

function ListScreen() {
    const friends = [{
        name: 'friend1'
    },{
        name: 'friend2'
    }, {
        name: 'friend3'
    }, {
        name: 'friend4'
    }]
    return (
        <FlatList 
            // horizontal 
            // showsHorizontalScrollIndicator={false}
            data={friends}
            keyExtractor={(friend) => {
                return friend.name;
            }} 
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}>
        </FlatList>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        fontSize: 30
    },
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 50
    }
})

export default ListScreen;