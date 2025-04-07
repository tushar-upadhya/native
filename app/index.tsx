import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { style } from "../styles/authStyles";
export default function Index() {
    return (
        <View style={style.container}>
            <Text style={style.title}>Hello World</Text>
            <TouchableOpacity onPress={() => alert("touched")}>
                <Text>Touch me</Text>

                <Pressable></Pressable>
            </TouchableOpacity>
        </View>
    );
}
