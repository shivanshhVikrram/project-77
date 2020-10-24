import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignupLoginScreen extends Component {
  constructor(){
    super()
    this.state={
      email:'',
      password:''
    }
  }
  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      return Alert.alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          
          <Text style={styles.title}>Barter System</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@bartersystem.com"
          placeholderTextColor = "white"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter your password"
          placeholderTextColor = "white"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'orange'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : 'white',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"black",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'white',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})
