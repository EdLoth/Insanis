import { Text, View, TextInput, KeyboardAvoidingView } from "react-native";

import styles from '../../../Components/styles'
import { StatusBar } from "expo-status-bar";

export function LoginScreen(){
    return( 
        <View style={styles.Container}>
            <StatusBar style="dark" backgroundColor="#FFFFFF" translucent={false}/>
            <Text>Login Screen</Text>
            <TextInput 
            style={styles.InputLogin}
            />
            <TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            placeholder="test"
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            /><TextInput 
            style={styles.InputLogin}
            />
        </View>
    )
}