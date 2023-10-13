import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'; // Added CheckBox import
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { COLORS } from '../../styles/colors/colors/';
import Checkbox from 'expo-checkbox';
import { Svg, Circle, Rect } from 'react-native-svg';


import { ButtonLogin, SuggestButton } from '../../customObjects/buttons';

const SignUp = () => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isChecked, setChecked] = useState(false); // Added state for CheckBox


  var size = 20;

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.headerForm]}></View>
        <View style={[styles.headerForm2]}></View>
        <View style={[styles.headerForm3]}></View>
        <View style={[styles.headerForm4]}></View>
        <View style={styles.containerTitle}>
        <Text style={styles.title}>Sign up</Text>
        </View>

      </View>
      

      <View style={styles.middle}>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={size} style={styles.icon} />

          <TextInput
            style={[
              styles.inPut,
              { borderColor: isNameFocused ? COLORS.primary : COLORS.textSecondary },
            ]}
            placeholder={isNameFocused ? '' : 'Name'}
            onFocus={() => { setIsNameFocused(true); console.log('Enfocado Name') }}
            onBlur={() => { setIsNameFocused(false); console.log('Des-Enfocado Name'); }}
          />

          {isNameFocused && (
            <Text style={styles.textPlaceholder}>Name</Text>
          )}
        </View>

        <View style={isEmailFocused ? [styles.inputContainer, styles.inputContainerOnFocus] : styles.inputContainer}>
          <Ionicons name="mail-outline" size={size} style={styles.icon} />

          <TextInput
            style={[
              styles.inPut,
              {
                borderColor: isEmailFocused ? COLORS.primary : COLORS.textSecondary,
              },
            ]}
            placeholder={isEmailFocused ? '' : 'Email'}
            onFocus={() => { setIsEmailFocused(true); console.log('Enfocado Mail') }}
            onBlur={() => { setIsEmailFocused(false); console.log('Des-Enfocado Mail'); }}
          />
          {isEmailFocused && (
            <Text style={styles.textPlaceholder}>Email</Text>
          )}
        </View>

        <View style={isPasswordFocused ? [styles.inputContainer, styles.inputContainerOnFocus] : styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={size} style={styles.icon} />

          <TextInput
            style={[
              styles.inPut,
              { borderColor: isPasswordFocused ? COLORS.primary : COLORS.textSecondary },
            ]}
            placeholder={isPasswordFocused ? '' : 'Password'}
            onFocus={() => { setIsPasswordFocused(true); console.log('Enfocado Pass') }}
            onBlur={() => { setIsPasswordFocused(false); console.log('Des-Enfocado Pass'); }}
          />
          {isPasswordFocused && (
            <Text style={styles.textPlaceholder}>Password</Text>
          )}
        </View>
      </View>
      <View style={styles.suggest}>
        <Checkbox // Added CheckBox component
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          tintColors={{ true: COLORS.primary, false: COLORS.textSecondary }} // Adjusted color property
        />
        <Text style={[styles.label, styles.text]}>I Agree with</Text>
        <SuggestButton onPress={() => console.log('privacy')} text="privacy" />
        <Text style={[styles.label, styles.text]}>and</Text>
        <SuggestButton onPress={() => console.log('policy')} text="policy" />
      </View>

      <ButtonLogin onPress={() => console.log('Sign Up')} text="Sign up" style={{ marginTop: 20, backgroundColor: COLORS.primary }} />

      <View style={styles.footer}>
        <View style={styles.signIn}>
          <Text style={[styles.label, styles.text]}>Already have an account ?</Text>
          <SuggestButton onPress={() => console.log('Sign in')} text="Sign in" />
        </View>
      </View>

    </View>

  );
};

export default SignUp;


<View style={styles.footer}>
  <View style={styles.signIn}>
    <Text style={[styles.label, styles.text]}>Already have an account ?</Text>
    <SuggestButton onPress={() => console.log('Sign in')} text="Sign in" />
  </View>
</View>