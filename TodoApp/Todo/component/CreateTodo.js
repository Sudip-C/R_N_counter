import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
// import { useNavigation } from "@react-navigation/native";



const CreateTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
//   const navigation = useNavigation();


  const handleCreate = () => {
    if (title && description) {
      const newTodo = {
        id: Math.random(), 
        title,
        description,
        completed: false,
      };
      addTodo(newTodo);
      setTitle("");
      setDescription("");
    //   navigation.goBack();
    }
  };``

  return (
    <View style={{marginTop:"20px",marginBottom:"30px",gap:"15px",border:"1px solid green",padding:"10px"}}>
      <Text style={{fontSize:"25px"}}>Create New Todo</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default CreateTodo;
