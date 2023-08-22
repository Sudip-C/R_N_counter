import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Home() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Counter App</Text>
      <Text style={{ fontSize: 36, marginTop: 20 }}>{count}</Text>
      <TouchableOpacity onPress={incrementCount} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, color: 'blue' }}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrementCount} style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 18, color: 'red' }}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}
