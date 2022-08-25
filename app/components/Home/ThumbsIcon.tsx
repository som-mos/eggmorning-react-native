import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Feather';

const ThumbsIcon = (): JSX.Element => {
    return (
        <View>
            <Icon name='thumbs-up' size={20} color='#333333' />
        </View>
    );
}

export default ThumbsIcon;