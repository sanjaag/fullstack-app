import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Fullstack App</Text>

        <Text style={styles.sectionTitle}>Getting Started</Text>

        <Text style={styles.methodTitle}>
          Method 1: Using Docker (Recommended)
        </Text>
        <Text style={styles.code}>
          # From the root directory{'\n'}
          docker-compose up --build
        </Text>
        <Text style={styles.description}>
          This will start the backend API and database automatically.
        </Text>

        <Text style={styles.methodTitle}>Method 2: Running Locally</Text>
        <Text style={styles.code}>
          # Backend setup{'\n'}
          cd backend{'\n'}
          npm install{'\n'}
          npm run init-db{'\n'}
          npm run dev{'\n\n'}# Mobile setup{'\n'}
          cd mobile{'\n'}
          npm install{'\n'}
          npm start
        </Text>

        <Text style={styles.sectionTitle}>Available Endpoints</Text>
        <Text style={styles.endpoint}>Backend API: http://localhost:3001</Text>
        <Text style={styles.endpoint}>Frontend: http://localhost:3000</Text>
      </View>
      <StatusBar style='auto' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  methodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  code: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    fontFamily: 'monospace',
    marginBottom: 10,
  },
  description: {
    marginBottom: 15,
  },
  endpoint: {
    marginBottom: 5,
  },
});
