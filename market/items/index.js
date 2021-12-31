import { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'

export default function Items() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const getItems = async () => {
        try {
            const response = await fetch('https://market-api-rails.herokuapp.com/items');
            const json = await response.json();
            setData(json.data.attributes);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(true)
        }
    }

    useEffect(() => {
        getItems();
    }, []);


    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            {
                loading ? (
                    <ScrollView style={{ width: '100%' }}>
                        {
                            data.map((i) => (
                                <View style={{ borderBottomWidth: 1, height: 220, width: '100%', marginBottom: 20 }} key={i.id}>
                                    <View style={{ height: 200, width: '100%', flexDirection: 'row', }}>
                                        <View style={{ backgroundColor: 'gray', width: '40%', marginLeft: 5 }}>
                                            <Text>img</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                            <Text style={{ fontSize: 18, paddingVertical: 5, width: 205, textAlign:'justify' }}>{i.name}</Text>
                                            <Text style={{ fontSize: 18, color: 'green', paddingVertical: 5 }}>$ {i.price}</Text>
                                            {/* <Text style={{ fontSize: 14, color: 'green', paddingVertical: 5 }}>{i.freeShip ? "Envio gratis" : null}</Text> */}
                                            <Text style={{ fontSize: 14, color: 'green', paddingVertical: 5 }}>Envio gratis</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        }
                    </ScrollView>
                ) : (<Text>Cargando...</Text>)
            }
        </View>
    )
}