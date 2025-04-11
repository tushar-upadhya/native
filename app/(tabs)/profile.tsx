import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ProfileProps {
    title: string;
}

const Profile: React.FC<ProfileProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Profile;
