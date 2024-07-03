import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };

    loadCart();
  }, []);

  const removeFromCart = async (productId) => {
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleRemoveFromCart = (productId) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item from the cart?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Remove",
          onPress: () => removeFromCart(productId)
        }
      ],
      { cancelable: true }
    );
  };

  const handleCheckout = () => {
    Alert.alert("Checkout", "Proceeding to checkout");
    // You can also navigate to a checkout screen here
    // navigation.navigate('CheckoutScreen');
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
        <Text style={styles.cartItemDescription}>{item.description}</Text>
      </View>
      <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)} style={styles.removeButton}>
        <Icon name="remove-circle-outline" size={30} color="#ff0000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/open_fashion_logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => console.log('Search pressed')}>
          <Icon name="search-outline" size={30} color="#000" bottom={18}/>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
      />
      {cart.length > 0 && (
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  logo: {
    width: 150,
    height: 60,
    left: 110,
    bottom :15,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    top :20,
  },
  cartItemImage: {
    width: 110,
    height: 140,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#ff0000',
  },
  cartItemDescription: {
    fontSize: 12,
    color: '#666',
  },
  removeButton: {
    marginLeft: 16,
  },
  checkoutButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
