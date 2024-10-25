import React from 'react';
import { View, Text, Image,ScrollView } from 'react-native';
import Movie from './components/movie';

// AllMovie Component
const AllMovie = () => {
  return (
      <ScrollView>
        <Text></Text>
        <Text></Text>
          <Movie title="Doctor Sleep" year={2019} icon_name="paw" poster = {require('./img/doctor-sleep.jpg')} />
          <Movie title="Midway" year={2020} icon_name="skull" poster = {require('./img/midway.jpg')} />
      </ScrollView>
  );
};

// Exporting AllMovie as the Parent Component
export default AllMovie;




