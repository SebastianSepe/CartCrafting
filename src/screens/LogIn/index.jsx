import { View, Text, TextInput, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react';

import Checkbox from 'expo-checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles'
import { COLORS } from '../../styles/colors/colors/';

import {SuggestButton, ButtonLogin } from '../../customObjects/buttons';



const LogIn = () => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isChecked, setChecked] = useState(false); // Added state for CheckBox


  function handleInstagramPress() {
    // Abre la página de Instagram en el navegador del dispositivo
    Linking.openURL('https://www.instagram.com/sebasepe/?hl=es-la');
  }
  function handleFacebookPress() {
    // Abre la página de Facebook en el navegador del dispositivo
    Linking.openURL('https://www.facebook.com/SebasSepe/?locale=es_ES');
  }
  function handleLinkedInPress() {
    // Abre la página de LinkedIn en el navegador del dispositivo
    Linking.openURL('https://www.linkedin.com/in/sebastian-rodr%C3%ADguez-sepe-424aa814b/');
  }
  function handleGitHubPress() {
    // Abre la página de GitHub en el navegador del dispositivo
    Linking.openURL('https://github.com/SebastianSepe');
  }

  var size = 20;

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <View style={[styles.headerForm]}></View>
        <View style={styles.containerTitle}>
        <Image source={require('../../assets/image/logo/Logo.png')} style={styles.title} />
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




        <ButtonLogin onPress={console.log('LogIn')} text="Log in" style={{ marginTop: 20, }} />

      </View>

      <View style={styles.footer}>

        <Text style={styles.text}>Or Sign in with</Text>

        <View style={styles.socialNetworks}>
          <TouchableOpacity onPress={() => handleInstagramPress('')}>
            <Image source={require('../../assets/image/socialNetwork/instagram.png')} style={styles.socialNetworkIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFacebookPress()}>
            <Image source={require('../../assets/image/socialNetwork/facebook.png')} style={styles.socialNetworkIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkedInPress()}>
            <Image source={require('../../assets/image/socialNetwork/linkedin.png')} style={styles.socialNetworkIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleGitHubPress()} style={[styles.socialNetworkIcon, styles.buttonWithBackground]}>
            <Image source={require('../../assets/image/socialNetwork/github.png')} style={styles.socialNetworkIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.signUp}>
          <Text style={[styles.label, styles.text]}>Don't have an account?</Text>
          <SuggestButton onPress={console.log('LogIn')} text="Sign up" />
        </View>

      </View>
    </View>
  );
};

export default LogIn