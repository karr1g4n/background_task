// Task.js
import { AppRegistry } from 'react-native';
import App from './App';

// Реєструємо Task
const taskName = 'BackgroundTask';

const backgroundTask = async () => {
  console.log('Фоновий завдання запущено');
  // Ваш код для фонових завдань
};

AppRegistry.registerHeadlessTask(taskName, () => backgroundTask);
