import { useRouter } from "expo-router";
import {
    Alert,
    Button,
    SectionList,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function OrdersScreen() {
  const router = useRouter();

  const orderData = [
    {
      type: "Breakfast",
      items: ["Pancakes - Table 4", "Omelette - Table 2", "Coffee - Table 1"],
    },
    {
      type: "Lunch",
      items: ["Burger - Table 5", "Pizza - Table 3", "Salad - Table 6"],
    },
    {
      type: "Dinner",
      items: ["Steak - Table 7", "Pasta - Table 8", "Fish - Table 9"],
    },
  ];

  const showAlertFunction = () => {
    Alert.alert("Kitchen Update", "Your orders are being prepared!");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Orders Screen</Text>
      </View>

      <SectionList
        sections={orderData.map((section) => ({
          title: section.type,
          data: section.items,
        }))}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "white",
              padding: 14,
              marginHorizontal: 15,
              marginBottom: 6,
              borderRadius: 6,
            }}
          >
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              backgroundColor: "#ddd",
              padding: 8,
              marginHorizontal: 15,
              marginTop: 12,
              marginBottom: 4,
              borderRadius: 4,
            }}
          >
            {section.title}
          </Text>
        )}
      />

      <View style={{ padding: 15 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#2196F3",
            padding: 14,
            borderRadius: 6,
            alignItems: "center",
            marginBottom: 8,
          }}
          onPress={showAlertFunction}
        >
          <Text style={{ color: "white", fontSize: 15 }}>Check Status</Text>
        </TouchableOpacity>

        <Button
          title="Back to Home"
          onPress={() => router.back()}
          color="#757575"
        />
      </View>
    </View>
  );
}
