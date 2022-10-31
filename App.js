import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
    const [count, setCount] = useState(0);
    const contar = () => setCount((prevCount) => prevCount + 1);
    const descontar = () => setCount((prevCount) => prevCount - 1);
    const resetear = () => setCount((prevCount) => prevCount - prevCount);

    return (
        <View style={styles.container}>
            <Text style={styles.txtcount}>{count}</Text>
            <View style={styles.subcontainer}>
                <TouchableOpacity style={styles.btn} onPress={contar}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>

                <View style={styles.separate}></View>
                <TouchableOpacity style={styles.btn} onPress={resetear}>
                    <Text style={styles.btnText}>0</Text>
                </TouchableOpacity>
                <View style={styles.separate}></View>
                <TouchableOpacity style={styles.btn} onPress={descontar}>
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#151515",
        alignItems: "center",
        justifyContent: "center",
    },
    subcontainer: {
        height: 50,
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
    },
    btn: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#251B37",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#25316D",
        borderRadius: 50,
    },
    btnText: {
        fontSize: 40,
        textAlign: "center",
        color: "#25316D",
    },
    separate: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    txtcount: {
        color: "#FFFFFF",
        fontSize: 100,
    },
});

export default App;
