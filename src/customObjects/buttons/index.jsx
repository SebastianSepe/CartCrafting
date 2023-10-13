import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { COLORS } from "../../styles/colors/colors/";

export function ButtonLogin(props) {

    const { onPress, text } = props
    
    return (
        <TouchableOpacity
            style = {{
                ...styles.buttonLogInSignUp,
                backgroundColor: COLORS.primary
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                }}
            
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export function SuggestButton(props) {

    const { onPress, text } = props
    
    return (
        <TouchableOpacity
            style = {{

                ...styles.SuggestButton,
                backgroundColor: 'transparent',
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: COLORS.DetailsPrimary,
                    fontSize: 16,
                    fontWeight: "bold",
                }}
            
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}




