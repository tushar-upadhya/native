import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="bookmarks" />
            <Tabs.Screen name="create" />
            <Tabs.Screen name="notifications" />
            <Tabs.Screen name="profile" />
        </Tabs>
    );
}
