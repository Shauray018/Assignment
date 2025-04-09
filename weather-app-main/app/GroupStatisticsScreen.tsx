import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import Header from '@/components/screens/exam/Header';

const GroupStatisticsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header 
        title="Group Statistics" 
        showBackButton={true} 
        onBackPress={() => navigation.goBack()} 
      />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.statsContainer}>
          <View style={styles.iconContainer}>
            <Feather name="bar-chart-2" size={40} color="#A78BFA" />
          </View>
          
          <Text style={styles.statsTitle}>Group Performance</Text>
          <Text style={styles.statsDescription}>
            View detailed statistics about your group's performance, usage patterns,
            and engagement metrics.
          </Text>
          
          <View style={styles.statsCard}>
            <Text style={styles.metricLabel}>Average Study Time</Text>
            <Text style={styles.metricValue}>4.5 hours / week</Text>
          </View>
          
          <View style={styles.statsCard}>
            <Text style={styles.metricLabel}>Completion Rate</Text>
            <Text style={styles.metricValue}>78%</Text>
          </View>
          
          <View style={styles.statsCard}>
            <Text style={styles.metricLabel}>Active Users</Text>
            <Text style={styles.metricValue}>102 / 124</Text>
          </View>
          
          <View style={styles.comingSoon}>
            <Feather name="info" size={18} color="#6B7280" />
            <Text style={styles.comingSoonText}>
              More detailed analytics coming soon
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  scrollView: {
    flex: 1,
  },
  statsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F5F3FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  statsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  statsDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  statsCard: {
    width: '100%',
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    marginBottom: 16,
  },
  metricLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  comingSoon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  comingSoonText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
  },
});

export default GroupStatisticsScreen;