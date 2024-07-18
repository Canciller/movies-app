import { ScrollView } from "react-native";
import { Capsules } from "./Capsules";
import { Card } from "./Card";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: insets.top + 55,
      }}
    >
      <Capsules />
      <Card />
    </ScrollView>
  );
}
