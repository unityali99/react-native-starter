import React from 'react';
import { Button, Text, View } from 'react-native';

const ProfileScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>This is contact us page</Text>
      <Button
        title="Go to Home screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default ProfileScreen;
