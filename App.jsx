import React, { useState } from 'react'; // Import useState hook
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList'; // Import ToDoList component

function App() {
  // Define state variable to store list of tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Pass tasks array to ToDoList component using props */}
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
