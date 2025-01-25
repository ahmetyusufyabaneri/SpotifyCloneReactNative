import {useNavigation} from '@react-navigation/native';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LikedScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#614385', '#516395']}
      style={styles.linearGradient}>
      <SafeAreaView>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}>
          <Ionicons name="arrow-back" color="#fff" size={32} />
        </Pressable>
        <Pressable style={styles.top}>
          <Pressable style={styles.searchInputContainer}>
            <Ionicons name="search-outline" color="#fff" size={24} />
            <TextInput
              style={styles.searchInput}
              placeholder="Find in Songs"
              placeholderTextColor={'#fff'}
            />
          </Pressable>
          <Pressable style={styles.sort}>
            <Text style={styles.sortText}>Sort</Text>
          </Pressable>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LikedScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  goBackButton: {
    marginHorizontal: 10,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#42275a',
    alignItems: 'center',
    gap: 12,
    padding: 8,
    borderRadius: 4,
  },
  searchInput: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  sort: {
    backgroundColor: '#42275a',
    marginHorizontal: 10,
    padding: 12,
    height: 40,
    borderRadius: 4,
  },
  sortText: {
    color: '#fff',
  },
});
