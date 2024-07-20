import { createContext, useContext } from "react";
import { SharedValue, useSharedValue } from "react-native-reanimated";

const SharedValuesContext = createContext<any>(null);

export function SharedValuesProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const opacity = useSharedValue(0);

  return (
    <SharedValuesContext.Provider value={{ opacity }}>
      {children}
    </SharedValuesContext.Provider>
  );
}

export function useSharedValuesContext(): {
  opacity: SharedValue<number>;
} {
  return useContext(SharedValuesContext);
}
