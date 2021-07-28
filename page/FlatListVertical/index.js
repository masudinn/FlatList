import React, { useState} from 'react'
import { View, Text, FlatList, Image } from 'react-native'


export default function FlatListVertical() {

    const dataPantai = [
    {
      id: 1,
      title: 'Baturaden',
      location: 'Banyumas',
      imageUrl:
        'https://www.portalwisata.com/wp-content/uploads/2017/04/Wisata-Alam-Baturraden.jpg',
    },
    {
      id: 2,
      title: 'Pantai Anyer',
      location: 'Banten',
      imageUrl:
        'https://www.bobobox.co.id/blog/wp-content/uploads/2019/09/shutterstock_425089165-450x300.jpg',
    },
    {
      id: 3,
      title: 'Pantai Parangtritis',
      location:'Bantul',
      imageUrl:
        'https://i1.wp.com/banyumasdaily.com/wp-content/uploads/2020/02/img_20120307091224_4f56c4081f364-e1582470046380.jpg?ssl=1',
    },
    {
      id: 4,
      title: 'Puncak Semeru',
      location: 'Lumajang',
      imageUrl:
        'https://www.dictio.id/uploads/db3342/original/3X/d/f/df70c6ca8bc3b5c2e21e28ac41c58e46431ceef8.jpeg',
    },
  ];

    const [pantai, setPantai] = useState(dataPantai)
    const renderItem = ({ item }) => {
        return (
            <View style={{height:140}}>
                <Image style={{width:250,height:140,borderRadius:5,resizeMode:'cover',marginRight:8}} source={{ uri: item.imageUrl }}/>
                <View style={{flexDirection:'column',alignItems:'center',position:'absolute',bottom:20,left:10}}>
                <Text style={{ fontSize: 18, marginBottom:5,fontWeight: 'bold', color:'white'}}>{item.title}</Text>
                </View>
                <View style={{flexDirection:'column',alignItems:'center',position:'absolute',bottom:5,left:10}}>
                <Text style={{ fontSize: 16, color:'white'}}>{item.location}</Text>
                </View>
            </View>
        )
    }



    return (
        <View style={{padding:10}}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={pantai}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}
