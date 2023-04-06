import styled from 'styled-components'
import { StyleSheet } from 'react-native';
import Constants  from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight
// Colors
export const Colors = {
    primary: '#ffffff',
    one: '#001f4a',
    two: '#102e5b',
    tree: '#1f3d6c',
    four: '#2f4b7d',
    five: '#3e5a8e',
    ice: '#f1f5f6',
};


const {primary, one, two, tree, four, five,ice} = Colors

export default StyleSheet.create({
    Container: {
        paddingTop: StatusBarHeight + 10,
        flex: 1,
        padding: 25,
        backgroundColor: Colors.primary,
    },
    InputLogin: {
        borderColor: Colors.one,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    }
});

