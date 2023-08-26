import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList,Image, TouchableOpacity } from 'react-native';
import SearchBar from './component/SearchBar';
import { getMovieDetails, searchMovies } from './src/api';
import MovieDetails from './src/MovieDetails';

// ... (other imports and code)

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleSearchSubmit = async () => {
    if (searchText) {
      try {
        const results = await searchMovies(searchText);
        setSearchResults(results || []);
        setSelectedMovie(null);
        setSearchText('') 
      } catch (error) {
        console.error('Error searching movies:', error);
        // Display an error message to the user
      }
    }
  };

  const handleMovieSelect = async (imdbID) => {
    try {
      const movieDetails = await getMovieDetails(imdbID);
      setSelectedMovie(movieDetails);
    } catch (error) {
      console.error('Error fetching movie details:', error);
      // Display an error message to the user
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.imdbID}
          // numColumns={4} 
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleMovieSelect(item.imdbID)}>
              <View style={styles.gridItem}>
                <Image
                  source={{ uri: item.Poster }}
                  style={styles.posterImage}
                />
                <Text style={styles.font}>{item.Title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      {/* Display error messages here */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  gridItem: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#170F02',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  // poster: {
  //   width: 150,
  //   height: 200,
  //   marginBottom: 10,
  // },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  font:{
    fontSize:20,
    fontFamily:'cursive',
    fontWeight: 700
  },
  posterImage: {
    width: 150,
    height: 100,
    marginRight: 10,
  },
});

// ... (styles and export)

export default App;
