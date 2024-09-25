import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';

// Реєстрація фонової задачі
const BACKGROUND_FETCH_TASK = 'background-fetch-task';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    console.log('Фоновий завдання запущено');
    // Ваш код для фонових завдань
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error('Помилка фонової задачі', error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

export default function App() {
  React.useEffect(() => {
    const initBackgroundFetch = async () => {
      await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 1, // Інтервал у секундах
        stopOnTerminate: false,
        startOnBoot: true,
      });
    };

    initBackgroundFetch();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
