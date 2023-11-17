import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons
            style={styles.searchIcon}
            name="ios-search"
            size={20}
            color={Colors.medium}
          />
          <TextInput
            style={styles.input}
            placeholder="Restaurants, groceries, dishes"
          />
        </View>
        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.leftSideHeader}>
          <TouchableOpacity>
            <Image
              style={styles.bike}
              source={require("@/assets/images/bike.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.titleContainer}>
            <Text style={styles.title}>Delivery . Nosw</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.subTitle}>Bouinan, Blida</Text>
              <Ionicons
                name={"chevron-down"}
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.profileContainer}>
            <Ionicons
              name={"person-outline"}
              size={20}
              color={Colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  leftSideHeader: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    flexDirection: "row",
  },
  bike: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    // flex: 1,
  },
  title: {
    color: Colors.medium,
    fontSize: 14,
  },
  profileContainer: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
    color: "red",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    height: 60,
    backgroundColor: "white",
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
  input: {
    padding: 10,
    color: Colors.medium,
  },
  searchIcon: {
    paddingLeft: 10,
  },
});

export default CustomHeader;
