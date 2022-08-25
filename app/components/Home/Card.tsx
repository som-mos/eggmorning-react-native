import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import ThumbsIcon from './ThumbsIcon';

export type HotelData = {
    name: string;
    id: string;
    thumbnail: string;
    title: string;
    description: string;
    like: number;
    unlike: number;
    user: userData;
};

type userData = {
    name: string;
    id: string;
    thumbnail: string;
};

type CardProps = {
    data: HotelData[];
    index?: number;
  };
  

const Card = ({data}: CardProps): JSX.Element => {
    return (
        <View style={[styles.container]}>
            <View style={styles.descContainer}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>
                        {data.title}
                    </Text>
                    <Text style={styles.userNameText}>
                        {data.user.name}
                    </Text>
                </View>
                {/* <View style={styles.subTextTopContainer}>
                    <Text style={styles.subText}>
                        {data.description}
                    </Text>
                </View> */}
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.hotelImage}
                    source={{
                    uri: data.thumbnail
                    }}
                    resizeMode='stretch'
                />
                <View style={styles.bottomButtonContainer}>
                    <View style={styles.bottomButton}>
                        <ThumbsIcon type='like' />
                        {/* <Text style={styles.subText}>
                            좋아요 : {data.like}
                        </Text> */}
                    </View>
                    <View style={styles.bottomButton}>
                        <ThumbsIcon type='unlike' />
                        {/* <Text style={styles.subText}>
                            싫어요 : {data.unlike}
                        </Text> */}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Card;