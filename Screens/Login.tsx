import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleLogin = () => {
        // Validate email
        if (!email.trim()) {
            setEmailError('Email is required');
            return;
        } else {
            setEmailError('');
        }

        // Validate password
        if (!password.trim()) {
            setPasswordError('Password is required');
            return;
        } else {
            setPasswordError('');
        }

        // Dummy login logic for demonstration
        if (email === 'jinesh@nxweb.in' && password === 'nxweb@123') {
            // Navigate to the next page upon successful login
            navigation.navigate('Home');
        } else {
            // Dummy error message for demonstration
            alert('Invalid email or password');
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/nxtech.png')}
                    style={styles.logo}
                />
            </View>
            <Input
                placeholder='Email'
                onChangeText={text => {
                    setEmail(text);
                    setEmailError('');
                }}
                value={email}
                leftIcon={<AntDesign name="user" size={24} color="black" />}
                autoCapitalize="none"
                keyboardType="email-address"
                errorMessage={emailError}
                containerStyle={styles.inputContainer}
            />
            <Input
                placeholder='Password'
                onChangeText={text => {
                    setPassword(text);
                    setPasswordError('');
                }}
                value={password}
                leftIcon={<AntDesign name="lock" size={24} color="black" />}
                secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
                rightIcon={<AntDesign name={showPassword ? 'eye' : 'eyeo'} size={24} color="black" onPress={() => setShowPassword(!showPassword)} />} // Toggle password visibility icon
                errorMessage={passwordError}
                containerStyle={styles.inputContainer}
            />
            {/* Forgot password link */}
            <Text style={styles.forgotPasswordText} onPress={() => console.log('Forgot password pressed')}>Forgot Password?</Text>
            {/* End of forgot password link */}
            <Button
                title='Login'
                onPress={handleLogin}
                buttonStyle={styles.loginButton}
            />
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Don't have an account? </Text>
                <Text style={styles.registerLink}>Register</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 190,
        height: 70,
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    loginButton: {
        backgroundColor: 'blue',
        height: 60,
        width: 150,
        borderRadius: 12,
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        marginRight: 5,
        marginTop: 10,

    },
    registerLink: {
        color: 'blue',
        marginTop: 10,
        textDecorationLine: 'underline',
    },
    // Styling for forgot password link
    forgotPasswordText: {
        alignSelf: 'flex-end',
        marginBottom: 20,
        marginTop: -10,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
