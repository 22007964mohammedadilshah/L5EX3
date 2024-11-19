import React from 'react';
import { Text, View, SectionList, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const datasource = [
  {
    data: [
      { name: "Squirtle", cardNumber: 7 },
      { name: "Wartortle", cardNumber: 8 },
      { name: "Blastoise", cardNumber: 9 },
    ],
    title: "Water Pokémon",
    color: 'lightblue',
    icon: "water-outline",
  },
  {
    data: [
      { name: "Charmander", cardNumber: 4 },
      { name: "Charmeleon", cardNumber: 5 },
      { name: "Charizard", cardNumber: 6 },
    ],
    title: "Fire Pokémon",
    color: "orange",
    icon: "flame-outline",
  },
  {
    data: [
      { name: "Bulbasaur", cardNumber: 1 },
      { name: "Ivysaur", cardNumber: 2 },
      { name: "Venusaur", cardNumber: 3 },
    ],
    title: "Grass Pokémon",
    color: "lightgreen",
    icon: "leaf-outline",
  },
  {
    data: [
      { name: "Pikachu", cardNumber: 25 },
      { name: "Raichu", cardNumber: 26 },
      { name: "Magnemite", cardNumber: 27 },
    ],
    title: "Electric Pokémon",
    color: "gold",
    icon: "flash-outline",
  },
];

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  addButton: {
    margin: 10,
    alignSelf: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    borderRadius: 50
  },
  sectionIcon: {
    marginRight: 10,

  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',

  },
  text: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: 150,
    height: 200,
    marginRight : 20
  },
});

const renderItem = ({ item }) => {
  const imageUrl = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.cardNumber}-2x.png`;
    return (
        <TouchableOpacity style={styles.item}>
          <View style={styles.text}>
            <Text style={styles.textStyle}>{item.name}</Text>
          </View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </TouchableOpacity>
    );
};

const App = () => {
  return (
      <View style={styles.parent}>
        <Button
            title="ADD POKEMON"
            color="blue"
            style={styles.addButton}
            onPress={() => console.log('Add Pokémon button clicked')}
        />
        <SectionList
            sections={datasource}
            keyExtractor={(item, index) => item.cardNumber.toString() + index}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, color, icon } }) => (
                <View style={[styles.sectionHeader, { backgroundColor: color }]}>
                  <Ionicons name={icon} size={24} color="black" style={styles.sectionIcon} />
                  <Text style={styles.sectionTitle}>{title}</Text>
                </View>
            )}
        />
      </View>
  );
};

export default App;
