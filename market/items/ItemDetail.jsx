import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ItemDetail() {
  return (
    <View style={{ width: "100%" }}>
      <ScrollView>
        <Text
          style={{
            fontSize: 18,
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          Motosierra Gasolina Leñera 52 Cc Barra 20'' Hkm520 Husky
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
            marginBottom: 5,
          }}
        >
          <MaterialCommunityIcons
            name="star"
            size={14}
            color="#3483FA"
            style={{ marginRight: 2 }}
          />
          <MaterialCommunityIcons
            name="star"
            size={14}
            color="#3483FA"
            style={{ marginRight: 2 }}
          />
          <MaterialCommunityIcons
            name="star"
            size={14}
            color="#3483FA"
            style={{ marginRight: 2 }}
          />
          <MaterialCommunityIcons
            name="star"
            size={14}
            color="#3483FA"
            style={{ marginRight: 2 }}
          />
          <MaterialCommunityIcons
            name="star-half"
            size={14}
            color="#3483FA"
            style={{ marginRight: 2 }}
          />
          <Text style={{ color: "gray" }}>103 opiniones</Text>
        </View>
        <View
          style={{
            height: 300,
            backgroundColor: "gray",
            marginBottom: 20,
            marginHorizontal: 10,
          }}
        >
          <Image
              style={{ height: 300 }}
              source={{
                uri: "https://http2.mlstatic.com/D_NQ_NP_690041-MLM47785377460_102021-O.webp",
              }}
            />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 32, marginRight: 5 }}>$ 2,000</Text>
          <Text style={{ fontSize: 18, color: "green" }}>10% OFF</Text>
        </View>

        <View style={{ width: "100%", marginHorizontal: 10 }}>
          <Text
            style={{
              width: 100,
              padding: 4,
              backgroundColor: "#3483FA",
              color: "white",
              fontSize: 12,
              borderRadius: 5,
              marginVertical: 10,
            }}
          >
            OFERTA DEL DÍA
          </Text>

          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={18}
              color="green"
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 14, color: "green", marginBottom: 5 }}>
              Entrega gratis
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="keyboard-return"
              size={18}
              color="green"
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 14, color: "green" }}>
              Devolucion gratis
            </Text>
          </View>

          <Text
            style={{
              fontSize: 14,
              color: "gray",
              marginBottom: 10,
              marginLeft: 25,
            }}
          >
            Tienes 30 días desde que lo recibes.
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#3483FA",
            alignItems: "center",
            borderRadius: 5,
            marginBottom: 5,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              padding: 10,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Comprar ahora
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#c9e6fa",
            alignItems: "center",
            borderRadius: 5,
            marginBottom: 10,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "#3483FA",
              padding: 10,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Agregar al carrito
          </Text>
        </TouchableOpacity>

        <View
          style={{
            width: "90%",
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={32}
            color="gray"
            style={{ marginRight: 10 }}
          />

          <View style={{ flexDirection: "column" }}>
            <Text style={{ color: "blue" }}>Compra Protegida:</Text>
            <Text style={{ color: "gray" }}>
              Recibe el producto que esperabas o te devolvemos tu dinero.
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "90%",
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <MaterialCommunityIcons
            name="trophy-variant-outline"
            size={32}
            color="gray"
            style={{ marginRight: 10 }}
          />

          <View style={{ flexDirection: "column" }}>
            <Text style={{ color: "blue" }}>Market Puntos:</Text>
            <Text style={{ color: "gray" }}>Sumas 78 puntos.</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#c5c5c5",
            marginVertical: 10,
          }}
        ></View>

        <View style={{ marginLeft: 10, marginBottom: 15 }}>
          <Text style={{ fontSize: 18, marginVertical: 15 }}>
            Informacion del producto
          </Text>

          <View style={{ flexDirection: "row", width: "100%" }}>
            <Text
              style={{ width: "47%", backgroundColor: "#eeeeee", padding: 15 }}
            >
              Marca
            </Text>
            <Text
              style={{ width: "47%", backgroundColor: "#eeeeee", padding: 15 }}
            >
              Hyundai
            </Text>
          </View>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <Text
              style={{ width: "47%", backgroundColor: "white", padding: 15 }}
            >
              Modelo
            </Text>
            <Text
              style={{ width: "47%", backgroundColor: "white", padding: 15 }}
            >
              HKM520
            </Text>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#c5c5c5",
            marginVertical: 15,
          }}
        ></View>

        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Descripción</Text>

          <Text style={{ textAlign: "justify" }}>
            Motosierra HKM520 Kusky para podas y derrames con motor de gasolina
            de 2 tiempos marca HUSKY. Ideales para tala y poda de jardines,
            fincas y derrame de árboles.
            {"\n"}
            {"\n"}
            Hyundai es una empresa formalmente establecida que se dedica a la
            comercialización de productos enfocados en los sectores agrícola,
            forestal y de la construcción en el mercado mexicano.
            {"\n"}
            {"\n"}
            Ayudando a sus consumidores a obtener la mejor experiencia con
            trabajos de calidad. Hyundai y Husky son marcas conglomeradas con
            una extensa red comercial en más de 190 países, con presencia y
            calidad en Estados Unidos, Canadá, Europa, Medio Oriente, Asia y
            Australia.
            {"\n"}
            {"\n"}
            Especificaciones:
            {"\n"}
            {"\n"}
            Motosierra a gasolina.
            {"\n"}
            Cilindrada: 52 cc.
            {"\n"}
            Potencia: 2.5 hp/2.2 kw.
            {"\n"}
            Mezcla de combustible: Gasolina / Aceite 1.
            {"\n"}
            Capacidad tanque de combustible: 550 ml.
            {"\n"}
            Aceite de cadena: Aceite de motor SAE#40.
            {"\n"}
            Capacidad del tanque de aceite: 260 ml.
            {"\n"}
            Carburador: Tipo diafragma.
            {"\n"}
            Consumo máximo de combustible: 560g/kw.h.
            {"\n"}
            Tamaño de la barra: 20''''.
            {"\n"}
            Cadena: 0.325''''.
            {"\n"}
            Diámetro De Corte: 560 mm.
            {"\n"}
            Peso: 7.5 kg.
            {"\n"}
            Dimensión de Caja: 43.5 x 34.5 x 32.5 cm.
            {"\n"}
            Incluye: Motosierra Husky SW5220.
            {"\n"}
            Cadena.
            {"\n"}Barra.
            {"\n"}Juego de llaves. {"\n"}Instructivo. {"\n"}Póliza de garantía.
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#c5c5c5",
            marginVertical: 15,
          }}
        ></View>

        <View style={{ marginVertical: 15, marginHorizontal: 10 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            Devolucion gratis
          </Text>
          <Text style={{ textAlign: "justify", color: "gray" }}>
            Tienes 30 días desde que recibes el producto para devolverlo. ¡No
            importa el motivo!
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#c5c5c5",
            marginVertical: 15,
          }}
        ></View>

        <View style={{ marginVertical: 15, marginHorizontal: 10 }}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>Garantía</Text>
          <Text style={{ textAlign: "justify", marginVertical: 5 }}>
            Compra Protegida con Market Pago
          </Text>
          <Text style={{ textAlign: "justify", color: "gray" }}>
            Recibe el producto que esperabas o te devolvemos tu dinero
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#c5c5c5",
            marginVertical: 15,
          }}
        ></View>

        <View style={{ marginVertical: 15, marginHorizontal: 10 }}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>Medios de pago</Text>
          <Text style={{ textAlign: "justify", color: "black" }}>
            Tarjetas de crédito
          </Text>
          <Text
            style={{ textAlign: "justify", marginBottom: 5, color: "gray" }}
          >
            ¡Paga en hasta 12 meses!
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginBottom: 10,
              alignItems: "center",
            }}
          >
            <Image
              style={{ height: 30, width: 40 }}
              source={{
                uri: "https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlm-master-medium_v_42d6856865.png",
              }}
            />
            <Image
              style={{ height: 16, width: 50, marginLeft: 15 }}
              source={{
                uri: "https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlm-visa-medium_v_42d6856865.png",
              }}
            />
            <Image
              style={{ height: 30, width: 30, marginLeft: 15 }}
              source={{
                uri: "https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlm-amex-medium_v_42d6856865.png",
              }}
            />
          </View>

          <Text
            style={{ textAlign: "justify", color: "gray", marginBottom: 10 }}
          >
            Tarjetas de débito
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 10,
              alignItems: "center",
            }}
          >
            <Image
              style={{ height: 30, width: 66 }}
              source={{
                uri: "https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlm-debmaster-medium_v_42d6856865.png",
              }}
            />
            <Image
              style={{ height: 16, width: 90, marginLeft: 15 }}
              source={{
                uri: "https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlm-debvisa-medium_v_42d6856865.png",
              }}
            />
          </View>

          <Text
            style={{ textAlign: "justify", color: "gray", marginBottom: 10 }}
          >
            Efectivo
          </Text>
          <Image
            style={{ height: 25, width: 55 }}
            source={{
              uri: "https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlm-oxxo-medium_v_42d6856865.png",
            }}
          />
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#c5c5c5",
            marginVertical: 15,
          }}
        ></View>

        <View style={{ marginVertical: 15, marginHorizontal: 10 }}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>
            Preguntas y respuestas
          </Text>
          <Text style={{ textAlign: "justify", color: "black", fontSize: 18 }}>
            ¿Qué quieres saber?
          </Text>

          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Text
              style={{
                backgroundColor: "#c9e6fa",
                color: "#3483FA",
                padding: 10,
                fontSize: 12,
                fontWeight: "bold",
                borderRadius: 5,
                marginRight: 5,
              }}
            >
              Costo y tiempo de envío
            </Text>
            <Text
              style={{
                backgroundColor: "#c9e6fa",
                color: "#3483FA",
                padding: 10,
                fontSize: 12,
                fontWeight: "bold",
                borderRadius: 5,
                marginRight: 5,
              }}
            >
              Devoluciones gratis
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                backgroundColor: "#c9e6fa",
                color: "#3483FA",
                padding: 10,
                fontSize: 12,
                fontWeight: "bold",
                borderRadius: 5,
                marginRight: 5,
              }}
            >
              Medios de pago y promociones
            </Text>
            <Text
              style={{
                backgroundColor: "#c9e6fa",
                color: "#3483FA",
                padding: 10,
                fontSize: 12,
                fontWeight: "bold",
                borderRadius: 5,
                marginRight: 5,
              }}
            >
              Garantía
            </Text>
          </View>

          <Text style={{ marginTop: 30, fontSize: 18 }}>
            Preguntale al vendedor
          </Text>
          <TextInput
            style={{
              height: 80,
              borderWidth: 1,
              borderColor: "gray",
              marginTop: 10,
              padding: 10,
              borderRadius: 5,
              paddingBottom: 40,
            }}
            multiline
            numberOfLines={4}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Escribe tu pregunta..."
          />

          <TouchableOpacity
            style={{
              backgroundColor: "#3483FA",
              borderRadius: 5,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                padding: 15,
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Preguntar
            </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 18, marginVertical: 20 }}>
            Últimas realizadas
          </Text>

          <View style={{ marginBottom: 15, width: "95%" }}>
            <Text>Una pregunta muy dudosa</Text>

            <View
              style={{
                marginLeft: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 12,
                  width: 15,
                  borderLeftWidth: 1,
                  borderBottomWidth: 1,
                  borderLeftColor: "gray",
                  borderBottomColor: "gray",
                }}
              ></View>
              <Text
                style={{
                  marginTop: 5,
                  color: "gray",
                  marginLeft: 5,
                  fontSize: 14,
                }}
              >
                La respuesta a esa pregunta muy dudosa
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 15, width: "95%" }}>
            <Text>Otra pregunta muy dudosa</Text>

            <View
              style={{
                marginLeft: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 12,
                  width: 15,
                  borderLeftWidth: 1,
                  borderBottomWidth: 1,
                  borderLeftColor: "gray",
                  borderBottomColor: "gray",
                }}
              ></View>
              <Text
                style={{
                  marginTop: 5,
                  color: "gray",
                  marginLeft: 5,
                  fontSize: 14,
                }}
              >
                La respuesta a esa otra pregunta muy dudosa
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 15, width: "95%" }}>
            <Text>
              Otra pregunta muy dudosa pero esta vez con mucho texto, vaya
              cuanto texto zZz
            </Text>

            <View
              style={{
                marginLeft: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 12,
                  width: 15,
                  borderLeftWidth: 1,
                  borderBottomWidth: 1,
                  borderLeftColor: "gray",
                  borderBottomColor: "gray",
                }}
              ></View>
              <Text
                style={{
                  marginTop: 5,
                  color: "gray",
                  marginLeft: 5,
                  fontSize: 14,
                }}
              >
                La respuesta a esa otra pregunta muy dudosa que tiene mucho
                texto, guacala tener que leer todo eso e.e{" "}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#c5c5c5",
            marginVertical: 15,
          }}
        ></View>

        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <Text style={{ fontSize: 18, marginBottom: 15 }}>
            Opiniones sobre el producto
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 42 }}>4.4</Text>

            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="star"
                  size={32}
                  color="#3483FA"
                  style={{ marginRight: 5 }}
                />
                <MaterialCommunityIcons
                  name="star"
                  size={32}
                  color="#3483FA"
                  style={{ marginRight: 5 }}
                />
                <MaterialCommunityIcons
                  name="star"
                  size={32}
                  color="#3483FA"
                  style={{ marginRight: 5 }}
                />
                <MaterialCommunityIcons
                  name="star"
                  size={32}
                  color="#3483FA"
                  style={{ marginRight: 5 }}
                />
                <MaterialCommunityIcons
                  name="star-half"
                  size={32}
                  color="#3483FA"
                  style={{ marginRight: 5 }}
                />
              </View>
              <Text style={{ color: "gray" }}>
                Promedio entre 103 opiniones
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginBottom: 10,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#3483FA",
              marginTop: 15,
              borderBottomWidth: 2,
              borderBottomColor: "#3483FA",
              fontSize: 14,
              textAlign: "center",
              width: "33%",
            }}
          >
            Todas
          </Text>
          <Text
            style={{
              color: "#000",
              marginTop: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#c5c5c5",
              fontSize: 14,
              textAlign: "center",
              width: "33%",
            }}
          >
            Positivas
          </Text>
          <Text
            style={{
              color: "#000",
              marginTop: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#c5c5c5",
              fontSize: 14,
              textAlign: "center",
              width: "33%",
            }}
          >
            Negativas
          </Text>
        </View>

        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="star"
              size={22}
              color="#3483FA"
              style={{ marginRight: 5 }}
            />
            <MaterialCommunityIcons
              name="star"
              size={22}
              color="#3483FA"
              style={{ marginRight: 5 }}
            />
            <MaterialCommunityIcons
              name="star"
              size={22}
              color="#3483FA"
              style={{ marginRight: 5 }}
            />
            <MaterialCommunityIcons
              name="star"
              size={22}
              color="#3483FA"
              style={{ marginRight: 5 }}
            />
            <MaterialCommunityIcons
              name="star"
              size={22}
              color="#3483FA"
              style={{ marginRight: 5 }}
            />
          </View>
          <Text style={{ fontSize: 14 }}>Excelente producto</Text>
          <Text style={{ color: "gray", marginTop: 5 }}>
            Es un gran producto, llevo 3 meses usandolo y no decepciona
          </Text>
        </View>

        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="star-half"
              size={22}
              color="#3483FA"
              style={{ marginRight: 5 }}
            />
          </View>
          <Text style={{ fontSize: 14 }}>Pesima calidad</Text>
          <Text style={{ color: "gray", marginTop: 5 }}>
            Producto mediocre no lo recomiendo es una estafa!
          </Text>
        </View>

        {/* Esta es la que quedaria final */}
        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="star"
              size={22}
              color="#3483FA"
              style={{ marginRight: 5 }}
            />
            <MaterialCommunityIcons
              name="star"
              size={22}
              color="#3483FA"
              style={{ marginRight: 5 }}
            />
            <MaterialCommunityIcons
              name="star"
              size={22}
              color="#3483FA"
              style={{ marginRight: 5 }}
            />
            <MaterialCommunityIcons
              name="star"
              size={22}
              color="#3483FA"
              style={{ marginRight: 5 }}
            />
            <MaterialCommunityIcons
              name="star"
              size={22}
              color="#3483FA"
              style={{ marginRight: 5 }}
            />
          </View>
          <Text style={{ fontSize: 14 }}>
            Excelente producto con reseña larga, tan larga que da flojera leerla
            zZz
          </Text>
          <Text style={{ color: "gray", marginTop: 5, textAlign: "justify" }}>
            Es un gran producto, llevo 1 mes usandolo y no decepciona,
            supuestamente esta debe ser una reseña mas extensa asi que aqui esta
            vaya que se extendio.
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#c5c5c5",
            marginVertical: 15,
          }}
        ></View>

        <Text style={{ marginHorizontal: 10 }}>Publicacion #123456789</Text>

        <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
          <View>
            <Text>Aqui van las cards de items </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
