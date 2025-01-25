import {Pressable, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginButton = ({
  iconName,
  iconColor,
  iconSize,
  text,
  backgroundColor,
  textColor,
}) => {
  return (
    <Pressable style={[styles.loginButton, {backgroundColor: backgroundColor}]}>
      <FontAwesome name={iconName} color={iconColor} size={iconSize} />
      <Text style={[styles.loginButtonText, {color: textColor}]}>{text}</Text>
    </Pressable>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  loginButton: {
    padding: 14,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    borderWidth: 0.5,
    borderColor: '#c0c0c0',
    width: 340,
    borderRadius: 999,
  },
  loginButtonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
