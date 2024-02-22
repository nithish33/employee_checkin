import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CheckinScreen = () => {
    const [employeeName, setEmployeeName] = useState('');
    const [logType, setLogType] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const handleAdd = () => {
        // Handle adding the form data
        console.log('Adding form data:', { employeeName, logType, dateTime, location, description });
        // You can perform additional actions here, such as submitting the form data to a server
    };

    const handleCancel = () => {
        // Handle canceling the form
        Alert.alert(
            'Cancel Confirmation',
            'Are you sure you want to cancel? All form data will be removed Systematically.',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'OK', onPress: () => clearFormData() }
            ]
        );
    };

    const clearFormData = () => {
        // Clear form data
        setEmployeeName('');
        setLogType('');
        setDateTime('');
        setLocation('');
        setDescription('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Employee Details</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Employee Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Employee Name"
                    value={employeeName}
                    onChangeText={setEmployeeName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Log Type</Text>
                <Picker
                    style={[styles.input, styles.picker]} // Apply custom styles for Picker
                    selectedValue={logType}
                    onValueChange={(itemValue) => setLogType(itemValue)}
                >
                    <Picker.Item label="Select Log Type" value="" />
                    <Picker.Item label="IN" value="IN" />
                    <Picker.Item label="OUT" value="OUT" />
                    {/* Add more log types as needed */}
                </Picker>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Date and Time</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Date and Time"
                    value={dateTime}
                    onChangeText={setDateTime}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Location</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Location"
                    value={location}
                    onChangeText={setLocation}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={[styles.input, styles.textarea]} // Apply custom styles for Textarea
                    placeholder="Enter Description"
                    multiline
                    value={description}
                    onChangeText={setDescription}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#d6d2d2' }]} onPress={handleCancel}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={handleAdd}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 20,

    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#e6e1e1', // Black border
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    picker: {
        borderColor: '#000', // Black border
    },
    textarea: {
        height: 50,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginLeft: 45,
    },
    button: {
        height: 50,
        width: 110,
        marginLeft: -40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25, // Half of height for circular button
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CheckinScreen;
