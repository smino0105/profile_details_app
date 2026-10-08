import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function App() {
  // Profile details
  const [name, setName] = useState("Sandanika Minodi");
  const [email, setEmail] = useState("sandanikamin53@gmail.com");

  // Temporary values for editing
  const [editName, setEditName] = useState("Sandanika Minodi");
  const [editEmail, setEditEmail] = useState(
    "sandanikamin53@gmail.com"
  );

  // Points
  const [points, setPoints] = useState(0);

  // Edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Open Edit Profile
  const openEditProfile = () => {
    setEditName(name);
    setEditEmail(email);
    setIsEditing(true);
  };

  // Save Profile
  const saveProfile = () => {
    setName(editName);
    setEmail(editEmail);
    setIsEditing(false);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditName(name);
    setEditEmail(email);
    setIsEditing(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
      />

      {/* App Bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>
          My Profile app
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Profile Image */}
        <View style={styles.avatarWrapper}>
          <Image
            source={require("./assets/profile.jpeg")}
            style={styles.avatar}
          />
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* ================= PROFILE VIEW ================= */}
        {!isEditing && (
          <View>

            {/* Name */}
            <Text style={styles.label}>
              Name
            </Text>

            <Text style={styles.value}>
              {name}
            </Text>

            {/* Email */}
            <Text style={styles.label}>
              Email
            </Text>

            <View style={styles.emailRow}>
              <Text style={styles.emailIcon}>
                ✉
              </Text>

              <Text style={styles.emailValue}>
                {email}
              </Text>
            </View>

            {/* Points */}
            <Text style={styles.label}>
              Points
            </Text>

            <View style={styles.pointsRow}>
              <Text style={styles.starIcon}>
                ★
              </Text>

              <Text style={styles.pointsValue}>
                {points}
              </Text>
            </View>

            {/* Edit Profile Button */}
            <TouchableOpacity
              style={styles.editButton}
              onPress={openEditProfile}
              activeOpacity={0.7}
            >
              <Text style={styles.editButtonText}>
                Edit Profile
              </Text>
            </TouchableOpacity>

          </View>
        )}

        {/* ================= EDIT PROFILE ================= */}
        {isEditing && (
          <View>

            <Text style={styles.editTitle}>
              Edit Profile
            </Text>

            {/* Name Input */}
            <Text style={styles.inputLabel}>
              Name
            </Text>

            <TextInput
              style={styles.input}
              value={editName}
              onChangeText={setEditName}
              placeholder="Enter your name"
              placeholderTextColor="#888888"
            />

            {/* Email Input */}
            <Text style={styles.inputLabel}>
              Email
            </Text>

            <TextInput
              style={styles.input}
              value={editEmail}
              onChangeText={setEditEmail}
              placeholder="Enter your email"
              placeholderTextColor="#888888"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Save Button */}
            <TouchableOpacity
              style={styles.saveButton}
              onPress={saveProfile}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>
                Save
              </Text>
            </TouchableOpacity>

            {/* Cancel Button */}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={cancelEdit}
              activeOpacity={0.7}
            >
              <Text style={styles.cancelButtonText}>
                Cancel
              </Text>
            </TouchableOpacity>

          </View>
        )}
      </ScrollView>

      {/* Plus Button */}
      {!isEditing && (
        <TouchableOpacity
          style={styles.fab}
          onPress={() =>
            setPoints(
              (currentPoints) => currentPoints + 1
            )
          }
          activeOpacity={0.7}
        >
          <Text style={styles.plusText}>
            +
          </Text>
        </TouchableOpacity>
      )}

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  /* Main Container */
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  /* ================= APP BAR ================= */

  appBar: {
    height: 80,
    width: "100%",
    backgroundColor: "#000000",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 18,
  },

  appBarTitle: {
    width: "100%",
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    flexShrink: 0,
  },

  /* ================= SCROLL CONTENT ================= */

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 120,
  },

  /* ================= PROFILE IMAGE ================= */

  avatarWrapper: {
    alignSelf: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ffffff",
    overflow: "hidden",
    elevation: 3,
  },

  avatar: {
    width: 120,
    height: 120,
    resizeMode: "cover",
  },

  /* ================= DIVIDER ================= */

  divider: {
    height: 2,
    backgroundColor: "#222222",
    marginTop: 24,
    marginBottom: 18,
  },

  /* ================= PROFILE LABELS ================= */

  label: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000000",
    marginTop: 12,
    marginBottom: 4,
  },

  /* Normal Text */
  value: {
    fontSize: 18,
    color: "#333333",
  },

  /* ================= EMAIL ================= */

  emailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    width: "100%",
  },

  emailIcon: {
    fontSize: 18,
    color: "#000000",
    width: 24,
  },

  emailValue: {
    fontSize: 18,
    color: "#333333",
    marginLeft: 6,
    width: 350,
    flexShrink: 0,
  },

  /* ================= POINTS ================= */

  pointsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  starIcon: {
    fontSize: 18,
    color: "#000000",
    width: 24,
  },

  pointsValue: {
    fontSize: 18,
    color: "#333333",
    marginLeft: 6,
  },

  /* ================= EDIT PROFILE BUTTON ================= */

  editButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#000000",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  editButtonText: {
    width: "100%",
    textAlign: "center",
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "600",
    flexShrink: 0,
  },

  /* ================= EDIT TITLE ================= */

  editTitle: {
    width: "100%",
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
    flexShrink: 0,
  },

  /* ================= INPUT LABEL ================= */

  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 6,
    marginTop: 10,
  },

  /* ================= TEXT INPUT ================= */

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 17,
    color: "#000000",
  },

  /* ================= SAVE BUTTON ================= */

  saveButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#000000",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  buttonText: {
    width: "100%",
    textAlign: "center",
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "600",
    flexShrink: 0,
  },

  /* ================= CANCEL BUTTON ================= */

  cancelButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#dddddd",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },

  cancelButtonText: {
    width: "100%",
    textAlign: "center",
    color: "#000000",
    fontSize: 17,
    fontWeight: "600",
    flexShrink: 0,
  },

  /* ================= PLUS BUTTON ================= */

  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },

  plusText: {
    width: "100%",
    textAlign: "center",
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "300",
    lineHeight: 36,
    flexShrink: 0,
  },
});