import { View, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

type ScreenWrapperProps = {
  children: React.ReactNode;
  scrollable?: boolean;
};

export default function ScreenWrapper({
  children,
  scrollable = true,
}: ScreenWrapperProps) {
  const { colors } = useTheme();

  if (scrollable) {
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
});
