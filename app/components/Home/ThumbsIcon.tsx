import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Feather';

type Props = {
    type: 'like' | 'unlike';
};

const ThumbsIcon = ({type}: Props): JSX.Element => {
    return (
        type === 'unlike' ?
        <View>
            <Icon name='thumbs-down' size={22} color='#333333' />
        </View>
        :
        <View>
        <Icon name='thumbs-up' size={22} color='#333333' />
    </View>
    );
}

export default ThumbsIcon;