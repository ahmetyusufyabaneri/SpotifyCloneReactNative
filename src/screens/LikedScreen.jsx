import {useNavigation} from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import {ModalContent} from 'react-native-modals';

const LikedScreen = () => {
  const navigation = useNavigation();

  const [searchedTracks, setSearchedTracks] = useState([1]);

  return (
    <>
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
          {/* {searchedTracks.length === 0 ? (
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
              )} */}
        </SafeAreaView>
      </LinearGradient>

      <Pressable style={styles.songControlContainer}>
        <View style={styles.songControlContainerLeft}>
          <Image
            source={{
              uri: 'https://img.freepik.com/premium-photo/square-frame-neon-picture-frame-blank-empty-background-pretty-backdrop_715671-3153.jpg',
            }}
            style={{width: 40, height: 40, borderRadius: 4}}
          />
          <Text style={styles.songName}>Song name</Text>
        </View>
        <View style={styles.songControlContainerRight}>
          <AntDesign name="heart" size={24} color={Colors.main} />
          <Foundation name="pause" size={36} color="#fff" />
        </View>
      </Pressable>

      <ModalContent>
        <View>
          <Text>Selam</Text>
        </View>
      </ModalContent>
    </>
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
  songControlContainer: {
    backgroundColor: '#5072a7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 'auto',
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 32,
    borderRadius: 6,
    marginBottom: 16,
  },
  songControlContainerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  songName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  songControlContainerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
});
