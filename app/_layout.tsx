import { Stack } from "expo-router";

import { useColorScheme } from "react-native";
import CustomHeader from "@/Components/CustomHeader";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <CustomHeader />,
        }}
      />
    </Stack>
  );
}
