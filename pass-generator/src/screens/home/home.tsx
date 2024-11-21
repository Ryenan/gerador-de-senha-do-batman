import React from "react";
import styles from "./styleHome";
import Input from "../../components/input/input"
import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { Logo } from "../../components/logo/logo";

export default function Home(){
    return(
        <>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Logo/>
                </View>
                <View>
                    <Input></Input>
                </View>
                <Text>É o bates</Text>
                <StatusBar style="auto"/>
            </View>
        </>
    );
}

