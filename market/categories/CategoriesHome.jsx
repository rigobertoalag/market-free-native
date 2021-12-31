import { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function CategoriesHome() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    try {
      const response = await fetch(
        "https://market-api-rails.herokuapp.com/categories"
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
    getCategories();
  }, []);

  return (
    <View
      style={{
        height: 120,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
      }}
    >
      {loading
        ? data.map((c) => (
            <View
              style={{ marginLeft: 10, marginRight: 10, alignItems: "center" }}
              key={c.id}
            >
              <View
                style={{
                  height: 85,
                  width: 85,
                  backgroundColor: "red",
                  borderRadius: 100,
                }}
              ></View>
              <Text>{c.name}</Text>
            </View>
          ))
        : null}
    </View>
  );
}
