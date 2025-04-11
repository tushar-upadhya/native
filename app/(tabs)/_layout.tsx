import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabbarInactiveTintColor: COLORS.grey,
                tabBarStyle: {
                    backgroundColor: "black",
                    borderTopWidth: 0,
                    position: "absolute",
                    elevation: 0, // Android only
                    height: 40,
                    paddingBottom: 10,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ size, color }: any) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="bookmarks"
                options={{
                    tabBarIcon: ({ size, color }: any) => (
                        <Ionicons name="bookmark" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    tabBarIcon: ({ size, color }: any) => (
                        <Ionicons
                            name="add-circle"
                            size={size}
                            color={COLORS.primary}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    tabBarIcon: ({ size, color }: any) => (
                        <Ionicons name="heart" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ size, color }: any) => (
                        <Ionicons
                            name="person-circle"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
