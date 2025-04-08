import { Link } from "expo-router";
import { View } from "react-native";
import { style } from "../styles/authStyles";

export default function Index() {
    return (
        <View style={style.container}>
            {/* <Text style={style.title}>Hello World</Text>
            <TouchableOpacity onPress={() => alert("touched")}>
                <Text>Touch me</Text>

                <Pressable onPress={() => alert("touched")}>
                    <Text>Touch meee</Text>
                </Pressable>
            </TouchableOpacity>

            <Image
                // source={require("@/assets/images/icon.png")}
                // style={{ width: 100, height: 100 }}
                // resizeMode="contain"

                source={{
                    uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffrantiger.biz%2Flisting%2Fthyrocare-franchise%2F&psig=AOvVaw2LJFNdDqYLe_X2KMQ6xs-t&ust=1744105990955000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj4-KHTxYwDFQAAAAAdAAAAABAE",
                }}
                style={{ width: 100, height: 100 }}
                resizeMode="cover"
            /> */}

            <Link href={"/notifications"}>notifications</Link>
        </View>
    );
}
