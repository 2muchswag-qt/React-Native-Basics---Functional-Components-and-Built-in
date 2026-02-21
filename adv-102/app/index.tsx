import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    FlatList,
    Image,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import SearchBar from "../components/SearchBar";

export default function HomeScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");

  const menuData = [
    {
      id: "1",
      name: "Chicken Burger",
      amount: "₱99.00",
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "2",
      name: "French Fries",
      amount: "₱399.00",
      image:
        "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "3",
      name: "Coca Cola",
      amount: "₱100.00",
      image:
        "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "4",
      name: "Chicken Wings",
      amount: "₱70.00",
      image:
        "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const closeModal = () => {
    setModalVisible(false);
    Alert.alert("✨ Got it!", "Modal closed successfully");
  };

  const submitName = () => {
    if (name) {
      Alert.alert("👋 Welcome!", `Hey ${name}, nice to meet you!`);
      setName("");
    } else {
      Alert.alert("⚠️ Oops!", "Please tell us your name first");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#faf3e0" }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{ paddingHorizontal: 24, paddingTop: 50, paddingBottom: 30 }}
        >
          {}
          <View style={{ marginBottom: 20, position: "relative" }}>
            <View
              style={{
                position: "absolute",
                top: -10,
                right: 0,
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: "#e6d5b8",
                opacity: 0.4,
              }}
            />
            <Text
              style={{
                fontSize: 42,
                fontWeight: "300",
                color: "#5e503f",
                letterSpacing: 1,
              }}
            >
              Home
            </Text>
            <Text
              style={{
                fontSize: 42,
                fontWeight: "700",
                color: "#5e503f",
                marginTop: -15,
              }}
            >
              Screen
            </Text>
          </View>

          {}
          <View
            style={{
              backgroundColor: "#e6d5b8",
              borderRadius: 30,
              padding: 12,
              marginBottom: 28,
              transform: [{ rotate: "-1deg" }],
            }}
          >
            <Image
              source={{
                uri: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600",
              }}
              style={{
                width: "100%",
                height: 200,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: "white",
              }}
            />
          </View>

          {}
          <View style={{ marginBottom: 30 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#c49a6c",
                  borderRadius: 4,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                  color: "#8b7a66",
                  letterSpacing: 1.5,
                }}
              >
                WHAT ARE YOU CRAVING?
              </Text>
            </View>
            {}
            <View style={{ width: "85%" }}>
              <SearchBar />
            </View>
          </View>

          {}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 18,
              borderBottomWidth: 2,
              borderBottomColor: "#e6d5b8",
              paddingBottom: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 24, marginRight: 8 }}>🍽️</Text>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                  color: "#5e503f",
                }}
              >
                Today's Specials
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#c49a6c",
                paddingVertical: 5,
                paddingHorizontal: 12,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  color: "white",
                  fontWeight: "600",
                }}
              >
                {menuData.length} items
              </Text>
            </View>
          </View>

          {}
          <FlatList
            data={menuData}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View style={{ marginBottom: 15 }}>
                {}
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 12,
                    borderRadius: 16,
                    flexDirection: "row",
                    alignItems: "center",
                    shadowColor: "#c49a6c",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.15,
                    shadowRadius: 5,
                    elevation: 3,
                    borderWidth: 1,
                    borderColor: "#e6d5b8",
                    width: 320,
                  }}
                >
                  {}
                  <View
                    style={{
                      width: 55,
                      height: 55,
                      borderRadius: 12,
                      overflow: "hidden",
                      marginRight: 15,
                      borderWidth: 1,
                      borderColor: "#e6d5b8",
                    }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>

                  {}
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#5e503f",
                        fontWeight: "500",
                      }}
                    >
                      {item.name}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "#faf3e0",
                        paddingVertical: 5,
                        paddingHorizontal: 12,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: "#e6d5b8",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "700",
                          color: "#c49a6c",
                          fontSize: 15,
                        }}
                      >
                        {item.amount}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            scrollEnabled={false}
          />

          {}
          <View
            style={{
              marginTop: 25,
              backgroundColor: "white",
              padding: 22,
              borderRadius: 25,
              shadowColor: "#c49a6c",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 4,
              marginBottom: 20,
              borderWidth: 1,
              borderColor: "#e6d5b8",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <Text style={{ fontSize: 22, marginRight: 10 }}>📝</Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: "#5e503f",
                }}
              >
                Tell us your name
              </Text>
            </View>

            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#e6d5b8",
                borderRadius: 20,
                padding: 16,
                fontSize: 16,
                marginBottom: 18,
                backgroundColor: "#fafaf5",
              }}
              placeholder="Enter your name here"
              placeholderTextColor="#b7a48b"
              value={name}
              onChangeText={setName}
            />

            <TouchableOpacity
              style={{
                backgroundColor: "#c49a6c",
                padding: 16,
                borderRadius: 30,
                alignItems: "center",
                shadowColor: "#c49a6c",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 4,
              }}
              onPress={submitName}
            >
              <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
                Submit Name
              </Text>
            </TouchableOpacity>
          </View>

          {}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
              gap: 15,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#5e503f",
                padding: 16,
                borderRadius: 40,
                alignItems: "center",
                shadowColor: "#5e503f",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 3,
                flexDirection: "row",
                justifyContent: "center",
              }}
              onPress={() => router.push("/orders")}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "600",
                  marginRight: 5,
                }}
              >
                View Orders
              </Text>
              <Text style={{ fontSize: 16 }}>📋</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#c49a6c",
                padding: 16,
                borderRadius: 40,
                alignItems: "center",
                shadowColor: "#c49a6c",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 3,
                flexDirection: "row",
                justifyContent: "center",
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "600",
                  marginRight: 5,
                }}
              >
                Open Modal
              </Text>
              <Text style={{ fontSize: 16 }}>🔮</Text>
            </TouchableOpacity>
          </View>

          {}
          <Modal visible={modalVisible} animationType="fade" transparent>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(94, 80, 63, 0.7)",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 35,
                  borderRadius: 50,
                  alignItems: "center",
                  width: "80%",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.25,
                  shadowRadius: 20,
                  elevation: 10,
                  borderWidth: 3,
                  borderColor: "#e6d5b8",
                }}
              >
                <View
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    backgroundColor: "#faf3e0",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                    borderWidth: 2,
                    borderColor: "#c49a6c",
                  }}
                >
                  <Text style={{ fontSize: 40 }}>✨</Text>
                </View>

                <Text
                  style={{
                    fontSize: 28,
                    marginBottom: 10,
                    fontWeight: "300",
                    color: "#5e503f",
                  }}
                >
                  Hello There!
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    color: "#8b7a66",
                    marginBottom: 25,
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  "This is a modal window"
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#c49a6c",
                    padding: 16,
                    borderRadius: 40,
                    width: "100%",
                    alignItems: "center",
                    borderWidth: 2,
                    borderColor: "#e6d5b8",
                  }}
                  onPress={closeModal}
                >
                  <Text
                    style={{ color: "white", fontSize: 17, fontWeight: "600" }}
                  >
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Footer */}
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#c49a6c", fontSize: 12 }}>✦</Text>
              <Text
                style={{
                  color: "#b7a48b",
                  fontSize: 13,
                  fontWeight: "400",
                  marginHorizontal: 8,
                }}
              >
                enjoy every bite
              </Text>
              <Text style={{ color: "#c49a6c", fontSize: 12 }}>✦</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
