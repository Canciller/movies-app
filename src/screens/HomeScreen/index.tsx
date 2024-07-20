import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { useWindowDimensions, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useDerivedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSharedValuesContext } from "../../providers/SharedValuesProvider";
import { Capsules } from "./Capsules";
import { Card } from "./Card";

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { height, width } = useWindowDimensions();

  const { opacity } = useSharedValuesContext();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      opacity.value = interpolate(
        event.contentOffset.y,
        [0, height * 0.5],
        [0, 1],
        "clamp",
      );
    },
  });

  const h = height * 0.7;

  const colors = useDerivedValue(() => {
    const startColor = interpolateColor(
      opacity.value,
      [0, 0.4],
      ["gray", "black"],
    );
    const r = [startColor, "black"];

    return r;
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: h,
          backgroundColor: "gray",
        }}
      />

      <Animated.ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + 55,
          backgroundColor: "black",
        }}
        onScroll={scrollHandler}
      >
        <Canvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: h,
          }}
        >
          <Rect x={0} y={0} width={width} height={h}>
            <LinearGradient
              start={vec(width / 2, 0)}
              end={vec(width / 2, h)}
              colors={colors}
            />
          </Rect>
        </Canvas>
        <Capsules />
        <Card />

        <View
          style={{
            height: 1000,
          }}
        />
      </Animated.ScrollView>
    </View>
  );
}
