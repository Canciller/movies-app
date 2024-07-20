import {
  DarkTheme,
  NavigationContainer,
  Theme,
  useTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import {
  SharedValuesProvider,
  useSharedValuesContext,
} from "./src/providers/SharedValuesProvider";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const { opacity } = useSharedValuesContext();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: `rgba(0, 0, 0, ${opacity.value * 0.8})`,
    };
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          header: () => {
            return (
              <Animated.View
                style={[
                  animatedStyles,
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    paddingTop: insets.top,
                    paddingLeft: insets.left + 20,
                    paddingRight: insets.right + 20,
                    height: insets.top + 55,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="movie-open"
                  size={48}
                  color={theme.colors.primary}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 40,
                  }}
                >
                  <Feather name="search" size={32} color={theme.colors.text} />

                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 5,
                    }}
                    source={{
                      uri: "https://pbs.twimg.com/profile_images/1506080366158831616/QtgYW8FL_400x400.jpg",
                    }}
                  />
                </View>
              </Animated.View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}

const theme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "red",
  },
};

export default function App() {
  return (
    <SharedValuesProvider>
      <NavigationContainer theme={theme}>
        <Tab.Navigator initialRouteName="home-navigator">
          <Tab.Screen
            name="news-and-hot-navigator"
            component={View}
            options={{
              headerShown: false,
              title: "News & Hot",
              tabBarIcon(props) {
                return (
                  <Feather name="copy" size={props.size} color={props.color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="home-navigator"
            component={HomeNavigator}
            options={{
              headerShown: false,
              title: "Home",
              tabBarIcon(props) {
                return (
                  <Entypo name="home" size={props.size} color={props.color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="games-navigator"
            component={View}
            options={{
              headerShown: false,
              title: "Games",
              tabBarIcon(props) {
                return (
                  <Ionicons
                    name="game-controller-outline"
                    size={props.size}
                    color={props.color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="downloads-navigator"
            component={View}
            options={{
              headerShown: false,
              title: "Downloads",
              tabBarIcon(props) {
                return (
                  <MaterialCommunityIcons
                    name="download-circle-outline"
                    size={props.size}
                    color={props.color}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SharedValuesProvider>
  );
}
