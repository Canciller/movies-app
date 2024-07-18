import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

export function Card() {
  const { height } = useWindowDimensions();
  const theme = useTheme();

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 0,
      }}
    >
      <ImageBackground
        style={{
          height: height * 0.5,
          borderRadius: 15,
          overflow: "hidden",
          borderColor: theme.colors.border,
          borderWidth: 1,
          justifyContent: "flex-end",
          padding: 15,
        }}
        source={{
          uri: "https://hips.hearstapps.com/hmg-prod/images/001-1665061436.jpg?crop=0.670xw:1.00xh;0.111xw,0&resize=640:*",
        }}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />

        <View>
          <Image
            style={{
              width: "100%",
              height: 150,
              objectFit: "contain",
            }}
            source={{
              uri: "https://image.tmdb.org/t/p/original/tupg7hsxYjMdpvuozvqXKGLnJaj.png",
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 15,
          }}
        >
          <View
            style={{
              flex: 1,
              borderRadius: 5,
              overflow: "hidden",
              backgroundColor: theme.colors.border,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
                backgroundColor: theme.colors.text,
              }}
            >
              <FontAwesome
                name="play"
                size={24}
                color={theme.colors.background}
              />

              <Text
                style={{
                  color: theme.colors.background,
                  fontWeight: "600",
                  fontSize: 16,
                }}
              >
                Play
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: theme.colors.border,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
                backgroundColor: theme.colors.border,
              }}
            >
              <AntDesign name="plus" size={24} color={theme.colors.text} />

              <Text
                style={{
                  color: theme.colors.text,
                  fontWeight: "600",
                  fontSize: 16,
                }}
              >
                My List
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
