import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ searchText, onSearchChange, onSearchSubmit }) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search movies..."
        value={searchText}
        onChangeText={onSearchChange}
      />
      <Button title="Search" onPress={onSearchSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default SearchBar;
