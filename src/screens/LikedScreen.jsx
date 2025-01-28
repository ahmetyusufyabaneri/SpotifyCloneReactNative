import {useNavigation} from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../themes/Colors';
import {useState} from 'react';
import SongItem from '../components/SongItem';

const LikedScreen = () => {
  const navigation = useNavigation();

  const [searchedTracks, setSearchedTracks] = useState([1]);

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
        <View style={{height: 40}} />
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.title}>Liked Songs</Text>
          <Text style={styles.songCountText}>420 Songs</Text>
        </View>
        <Pressable style={styles.topButtonsContainer}>
          <Pressable style={styles.arrowButtonContainer}>
            <Ionicons name="arrow-down" color="#fff" size={24} />
          </Pressable>
          <View style={styles.rightButtons}>
            <FontAwesome name="random" color={Colors.main} size={24} />
            <Pressable style={styles.playButtonContainer}>
              <Ionicons name="play" color="#fff" size={32} />
            </Pressable>
          </View>
        </Pressable>
        {searchedTracks.length === 0 ? (
          <View
            style={{
              height: '60%',
              justifyContent: 'center',
            }}>
            <ActivityIndicator color={'#fff'} size={'large'} />
          </View>
        ) : (
          <FlatList
            data={searchedTracks}
            renderItem={({item}) => <SongItem />}
          />
        )}
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
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  songCountText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 6,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  arrowButtonContainer: {
    width: 40,
    height: 40,
    backgroundColor: Colors.main,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  playButtonContainer: {
    width: 60,
    height: 60,
    backgroundColor: Colors.main,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
