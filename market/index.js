import { View, SafeAreaView, ScrollView, Button } from 'react-native'

import Cover from './components/Cover.jsx'
import CategoriesHome from './categories/CategoriesHome.jsx'
import ItemsHome from './items/ItemsHome.jsx'

export default function Home({ navigation }) {
    return (
        <View style={{ height: '100%', marginTop: 10 }}>
            <SafeAreaView>
                <ScrollView style={{}}>
                    <View style={{ flex: 1, marginBottom: '5%' }}>
                        <Cover />
                        <Button
                            title='ItemDetail'
                            onPress={() => navigation.navigate('ItemDetail')}
                        />
                        <CategoriesHome />
                        <ItemsHome />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>

    )
}