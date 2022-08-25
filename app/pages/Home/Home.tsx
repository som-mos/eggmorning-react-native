import React from 'react';
import {FlatList, Image, RecyclerViewBackedScrollView, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Card, { HotelData } from '../../components/Home/Card';
import {styles} from './styles';


const data: HotelData[] = [
  {
    name: '롯데 호텔 서울',
    id: 'hotel_00',
    thumbnail: 'https://images.unsplash.com/photo-1578704311587-4fbd590630d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    title: '롯데 호텔 서울 조식 레스토랑',
    description: '',
    like: 10,
    unlike: 1,
    user: { name: '바삭한군만두', id:'uid_00', thumbnail: ''}
  },
  {
    name: '그랜드 워커힐 서울',
    id: 'hotel_01',
    thumbnail: 'https://images.unsplash.com/photo-1558497446-1fd7429d9be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: '롯데 호텔 서울 조식 레스토랑',
    description: '',
    like: 10,
    unlike: 1,
    user: { name: '바삭한군만두', id:'uid_00', thumbnail: ''}
  },
  {
    name: '웨스틴 조선 서울',
    id: 'hotel_02',
    thumbnail: 'https://images.unsplash.com/photo-1633327760690-d9bb0513f942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: '롯데 호텔 서울 조식 레스토랑',
    description: '',
    like: 10,
    unlike: 1,
    user: { name: '바삭한군만두', id:'uid_00', thumbnail: ''}
  },
  {
    name: '포시즌스 호텔 서울',
    id: 'hotel_03',
    thumbnail: 'https://images.unsplash.com/photo-1578704311587-4fbd590630d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    title: '롯데 호텔 서울 조식 레스토랑',
    description: '',
    like: 10,
    unlike: 1,
    user: { name: '바삭한군만두', id:'uid_00', thumbnail: ''}
  },
  {
    name: '시그니엘 호텔 서울',
    id: 'hotel_04',
    thumbnail: 'https://images.unsplash.com/photo-1578704311587-4fbd590630d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    title: '롯데 호텔 서울 조식 레스토랑',
    description: '',
    like: 10,
    unlike: 1,
    user: { name: '바삭한군만두', id:'uid_00', thumbnail: ''}
  },
];


const Home = (): JSX.Element => {
  const renderItem = ({ item }) => (
    <Card data={item} />
  );

  return (
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.topNoticeContainer}>
            <Image style={styles.iconImage} source={require('../../assets/megaphone_icon.png')} />
            <Text style={styles.topNoticeText}>현재 서울의 5성급 호텔만 평가가 가능합니다.</Text>
          </View>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
        </ScrollView>
      </SafeAreaView>
  );
};

export default Home;
