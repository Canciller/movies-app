import { Entypo } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

export function Capsules() {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        padding: 20,
      }}
    >
      <Capsule>TV Shows</Capsule>

      <Capsule>Movies</Capsule>

      <Capsule
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Text
          style={{
            color: theme.colors.text,
          }}
        >
          Categories
        </Text>

        <Entypo name="chevron-thin-down" size={16} color={theme.colors.text} />
      </Capsule>
    </View>
  );
}

function Capsule({
  children,
  style,
}: {
  children?: string | React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        {
          borderColor: theme.colors.text,
          borderWidth: 1,
          borderRadius: 9999,
          paddingHorizontal: 16,
          paddingVertical: 8,
          justifyContent: "center",
        },
        style,
      ]}
    >
      {typeof children === "string" ? (
        <Text
          style={{
            color: theme.colors.text,
          }}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
