import React, { useState} from 'react'
import { View, Text, FlatList, StyleSheet, Image, ScrollView} from 'react-native'

export default function FlatListHorizontal() {
    const dataMobil = [
        {
            id: 1,
            nama: 'Rush',
            merk: 'toyota',
            plat: 'ad 123 abc',
            photo: 'https://avatarfiles.alphacoders.com/130/130239.jpg'
        },
        {
            id: 2,
            nama: 'Almaz',
            merk: 'wuling',
            plat: 'aa 2123 aaa',
            photo: 'https://avatarfiles.alphacoders.com/100/100363.jpg'
        },
        {
            id: 3,
            nama: 'Avanza',
            merk: 'toyota',
            plat: 'b 111 ab',
            photo: 'https://avatarfiles.alphacoders.com/249/249019.jpg'
        },
        {
            id: 4,
            nama: 'Xenia',
            merk: 'toyota',
            plat: 'x 452 xb',
            photo: 'https://avatarfiles.alphacoders.com/130/130239.jpg'
        },
        {
            id: 5,
            nama: 'Innova',
            merk: 'toyota',
            plat: 't 4312 a',
            photo: 'https://avatarfiles.alphacoders.com/100/100363.jpg'
        },
        {
            id: 6,
            nama: 'Camry',
            merk: 'toyota',
            plat: 'c 18973 ca',
            photo: 'https://avatarfiles.alphacoders.com/249/249019.jpg'
        },
        {
            id: 7,
            nama: 'Xpander',
            merk: 'mitsubisi',
            plat: 'f 1233 fe',
            photo: 'https://avatarfiles.alphacoders.com/130/130239.jpg'
        },
        {
            id: 8,
            nama: 'Pajero',
            merk: 'mitsubisi',
            plat: 'f 4214 fe',
            photo: 'https://avatarfiles.alphacoders.com/100/100363.jpg'
        },
        {
            id: 9,
            nama: 'Fortuner',
            merk: 'toyota',
            plat: 'p 4231 pe',
            photo: 'https://avatarfiles.alphacoders.com/249/249019.jpg'
        },
        {
            id: 10,
            nama: 'Brio',
            merk: 'honda',
            plat: 'h 3421 he',
            photo: 'https://avatarfiles.alphacoders.com/130/130239.jpg'
        },       {
            id: 11,
            nama: 'Mobilio',
            merk: 'honda',
            plat: 'h 3421 he',
            photo: 'https://avatarfiles.alphacoders.com/100/100363.jpg'
        },       {
            id: 12,
            nama: 'BRV',
            merk: 'honda',
            plat: 'h 3421 he',
            photo: 'https://avatarfiles.alphacoders.com/249/249019.jpg'
        },
    ];

    const [mobil, setMobil] = useState(dataMobil)
    const renderItem = ({ item }) => {
        return (
            <ScrollView horizontal>
                <View style={styles.item}>
                    <Image source={{ uri: item.photo }} style={{borderRadius:25 ,width:50,height:50,marginRight:10}}/>
                    <View>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.nama}</Text>
                        <Text style={{ fontWeight: "500", fontSize: 17 }}>{item.merk}</Text>
                    </View>
                </View>
            </ScrollView>
            
        )
    }

    return (
        <View style={{ padding: 10 }}>
            <Text style={{ marginBottom: 20, textAlign: 'center', fontWeight: 'bold' }}>Latihan Flat List Horizontal</Text>
        
            <FlatList
                data={mobil}
                renderItem={renderItem}
                //key identifikasi
                keyExtractor={ (item) => item.id}
            />
        </View>
    );


    
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:10
    }
})