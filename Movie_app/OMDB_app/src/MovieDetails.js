import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieDetails = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text style={styles.rating}>{movie.Year}</Text>
      <Text style={styles.font}>Plot: {movie.Plot}</Text>
      <Text style={styles.rating}>Ratings: {movie.Ratings.map((rating) => rating.Value).join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap:20,
    
    
  },
  rating:{
    fontSize:15,
    fontWeight:500
  },
  poster: {
    width: 150,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily:'cursive'
  },
  font:{
    fontSize:20,
    fontWeight: 400
  }
});

export default MovieDetails;
