import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Button, Divider } from 'react-native-elements';
// Import FontAwesome icons
import { FontAwesome5 } from '@expo/vector-icons';

const Home = () => {
    const navigation = useNavigation();

    // const handleLogout = () => {
    // Implement your logout logic here
    // For example, navigate back to the login screen
    // navigation.navigate('Login');
    // };

    return (
        <View style={styles.container}>
            {/* Main content */}
            <View style={styles.content}>
                {/* Your content here */}
                <Button title="Add Check-In" type='solid' buttonStyle={styles.checkinbutton} onPress={() => navigation.navigate('CheckinScreen')} />
                <Button title="Add Check-Out" type='solid' buttonStyle={styles.checkoutbutton} onPress={() => navigation.navigate('CheckinScreen')} />
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                {/* Menu bar icons with names */}
                <View style={styles.iconContainer}>
                    <FontAwesome5 name="home" size={24} color="blue" onPress={() => navigation.navigate('Login')} />
                    <Text style={styles.iconName}>Home</Text>
                </View>
                <View style={styles.iconContainer}>
                    <FontAwesome5 name="comment" size={24} color="blue" />
                    <Text style={styles.iconName}>Messages</Text>
                </View>
                <View style={styles.iconContainer}>
                    <FontAwesome5 name="plus" size={24} color="blue" />
                    <Text style={styles.iconName}>Add</Text>
                </View>
                <View style={styles.iconContainer}>
                    <FontAwesome5 name="calendar-alt" size={24} color="blue" />
                    <Text style={styles.iconName}>Calendar</Text>
                </View>
                <View style={styles.iconContainer}>
                    <FontAwesome5 name="user" size={24} color="blue" />
                    <Text style={styles.iconName}>Profile</Text>
                </View>
            </View>

            {/* Status bar */}
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    checkinbutton: {
        backgroundColor: 'blue',
        height: 60,
        width: 200,
        marginVertical: 10,
        borderRadius: 12,
    },
    checkoutbutton: {
        backgroundColor: 'blue',
        height: 60,
        width: 200,
        marginVertical: 10,
        borderRadius: 12,
    },
    iconContainer: {
        alignItems: 'center',
    },
    iconName: {
        marginTop: 5,
        fontSize: 12,
        color: 'blue',
    },

});

export default Home;
