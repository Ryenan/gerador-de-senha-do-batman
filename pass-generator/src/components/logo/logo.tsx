import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './logoStyles';
import iconLogo from '../../../assets/cadeado.png'

export function Logo() {
  return (
    <>
        <Text style={styles.title}>
            GERADOR DE SENHA
        </Text>
        <Image source={iconLogo} style={{
          resizeMode: 'contain',
          height: 220,
          marginTop: 25,
        }}></Image>
    </>
  );
}