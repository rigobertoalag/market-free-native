import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Categories() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const getCategories = async () => {
        try {
            const response = await fetch('https://market-api-rails.herokuapp.com/categories');
            const json = await response.json();
            setData(json.data.attributes);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(true)
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <View>
            {
                loading ? (
                    <ScrollView>
                        <View style={{ marginLeft: 10, marginRight: 10, marginTop: 15, marginBottom: 20 }}>
                            <Text>Categorias</Text>

                            <View style={{ marginTop: 15, borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1 }}>
                                {
                                    data.map((c) => (
                                        <View style={{ borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }} key={c.id}>
                                            <Text style={{ padding: 15, fontSize: 18 }}>{c.name}</Text>
                                            <MaterialIcons name="keyboard-arrow-right" color='black' size={24} style={{ padding: 15 }} />
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                    </ScrollView>
                ) : (<Text>Cargando...</Text>)
            }
        </View>
    )
}