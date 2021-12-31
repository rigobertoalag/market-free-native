import { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function ItemsHome() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItems = async () => {
    try {
      const response = await fetch(
        "https://market-api-rails.herokuapp.com/items"
      );
      const json = await response.json();
      setData(json.data.attributes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <View
      style={{
        marginTop: 15,
        alignItems: "center",
        height: "100%",
        marginBottom: "5%",
      }}
    >
      {
        loading ? (
          data.map((i) => (
            <View style={{ width: "90%", borderWidth: 1, marginBottom: 20, borderColor: 'gray' }} key={i.id}>
              <View style={{ height: 200, backgroundColor: "gray" }}>
                <Text>img</Text>
              </View>
    
              <View style={{ marginLeft: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 18, textAlign: 'justify', marginRight: 10 }}>{i.name}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 3,
                  }}
                >
                  <Text style={{ fontSize: 22, marginRight: 10, color: 'green' }}>${i.price}</Text>
                  <Text style={{ color: "green", fontSize: 14 }}>
                    10% OFF
                  </Text>
                </View>
                <Text style={{ color: "green", fontSize: 14, paddingBottom: 20 }}>
                  Envio gratis
                </Text>
    
                <View style={{ padding: 10, borderTopWidth: 1, marginLeft: -10, borderColor: 'gray' }}>
                  <Text style={{ color: "blue", fontWeight: "800" }}>Ver mas</Text>
                </View>
              </View>
            </View>
          ))
        ) : (<Text>Cargando</Text>)
      }
    </View>
  );
}
