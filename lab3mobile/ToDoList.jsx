import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

function ToDoList({ tasks }) { // Destructure tasks prop
  return (
    <ScrollView>
      {/* Map over tasks array and render each task as a list item */}
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
