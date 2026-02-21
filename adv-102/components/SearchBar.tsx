import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) {
      Alert.alert("🔍 Found it!", `You searched for: ${search}`);
      setSearch("");
    } else {
      Alert.alert("🤔 Hmm...", "Type something to search");
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 30,
        padding: 6,
        shadowColor: "#c49a6c",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: "#e6d5b8",
      }}
    >
      <TextInput
        style={{
          flex: 1,
          padding: 12, // Reduced padding
          fontSize: 15,
          borderRadius: 25,
          color: "#5e503f",
        }}
        placeholder="Search food..."
        placeholderTextColor="#b7a48b"
        value={search}
        onChangeText={setSearch}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#c49a6c",
          paddingHorizontal: 18, // Reduced horizontal padding
          paddingVertical: 10, // Reduced vertical padding
          borderRadius: 30,
          justifyContent: "center",
        }}
        onPress={handleSearch}
      >
        <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
          Go
        </Text>
      </TouchableOpacity>
    </View>
  );
}
