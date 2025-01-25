import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../themes/Colors';
import LoginButton from '../components/LoginButton';

const LoginScreen = () => {
  return (
    <LinearGradient
      colors={['#040306', '#131624']}
      style={styles.linearGradient}>
      <SafeAreaView>
        <View style={{height: 60}} />
        <FontAwesome
          name="spotify"
          color="#fff"
          size={96}
          style={styles.spotifyIcon}
        />
        <Text style={styles.title}>Millions of Songs Free on Spotify!</Text>
        <View style={{height: 60}} />
        <LoginButton
          iconName={'spotify'}
          iconColor={'#000'}
          iconSize={28}
          text={'Sign In with Spotify'}
          backgroundColor={Colors.main}
          textColor={'#000'}
        />
        <LoginButton
          iconName={'mobile-phone'}
          iconColor={'#fff'}
          iconSize={28}
          text={'Continue with Phone Number'}
          backgroundColor={'transparent'}
          textColor={'#fff'}
        />
        <LoginButton
          iconName={'google'}
          iconColor={'#fff'}
          iconSize={28}
          text={'Continue with Google'}
          backgroundColor={'transparent'}
          textColor={'#fff'}
        />
        <LoginButton
          iconName={'facebook-square'}
          iconColor={'#fff'}
          iconSize={28}
          text={'Continue with Facebook'}
          backgroundColor={'transparent'}
          textColor={'#fff'}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  spotifyIcon: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 40,
    paddingHorizontal: 18,
  },
  loginButton: {
    backgroundColor: Colors.main,
    padding: 16,
    marginHorizontal: 'auto',
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
  buttonText: {
    fontSize: 17,
  },
});
