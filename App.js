/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { useState } from "react";
 import { SafeAreaView,Picker,StyleSheet, Text ,TextInput,View ,Image,ScrollView,TouchableOpacity,Button} from 'react-native';
 
 const PizzaTranslator = () =>  {
  const [name, setName] = useState('');
  // var firstname = 20.7;
  // let lastname;
  // firstnam = 'keng'
  const alertText = () =>{
    alert(name)
  }
  const [x, seta] = useState('');
  const [y, setb] = useState('');
  const alertName = () =>{
    alert(x+" "+y)
  }
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [selectedValue, setSelectedValue] = useState("plus");

  const calculate = () => {
    if(selectedValue == 'plus') {
      alert(parseFloat(a)+parseFloat(b))
    } else if(selectedValue == 'minus') {
      alert(parseFloat(a)-parseFloat(b))
    } else if(selectedValue == 'multiple') {
      alert(parseFloat(a)*parseFloat(b))
    } else if(selectedValue == 'divide') {
      alert(parseFloat(a)/parseFloat(b))
    }
  }
  

//  const FlexDirectionBasics = () => {
//    const [flexDirection, setflexDirection] = useState("column");

   return (
    // <View style={{ flex:1, flexDirection: "column" }}>
    //   <View style={{ flex:1, flexDirection: "row", justifyContent:"center" }}>
        
    //     <View style={{flex:1, backgroundColor: "blue"}}>
    //       <View style={{width: 50, height:50, backgroundColor: "green" }}><Text>1</Text></View>
    //     </View>

    //     <View style={{flex:1, backgroundColor: "green", flexDirection: "row-reverse"}}>
    //     <View style={{width: 50, height:50, backgroundColor: "red" }}><Text>2</Text></View>
    //     </View>
        
    //   </View>
    //   <View style={{ flex:1, flexDirection: "row" }}>
    //     <View style={{flex:1, backgroundColor: "red", justifyContent:"flex-end"}}>
    //       <View style={{width: 50, height:50, backgroundColor: "green"}}><Text>1</Text></View>
    //     </View>

    //     <View style={{flex:1, backgroundColor: "yellow", justifyContent:"flex-end", flexDirection: "column"}}>
    //       <View style={{ backgroundColor: "yellow", justifyContent:"flex-end", flexDirection: "row"}}>  
    //         <View style={{width: 50, height:50, backgroundColor: "blue"}}><Text>1</Text></View>
    //       </View>
    //     </View>
       
    //   </View>
    // </View>
    
    <View style={{padding: 10}}>
        <TextInput  
        style={{hight: 40,borderColor:"#aaaaaa", borderWidth:1}} 
        placeholder="Type here to translate"
        keyboardType="number-pad"
        onChangeText={text => setName(text)}
        />
        <Text>Name: {name}</Text>
        

        {/* <Button title="Click me!!!" onPress={ ()=>{alert(name)}}></Button> */}
        <Button title="Click me!!!" onPress={ alertText}></Button>

        <View style={{height:50}}></View>

        <Text>MyNameIs:</Text>
        <TextInput  
        style={{hight: 40,borderColor:"#aaaaaa", borderWidth:1}} 
        placeholder="Firstname"
        keyboardType="onChangeText"
        onChangeText={text => seta(text)}
        />
        <TextInput  
        style={{hight: 40,borderColor:"#aaaaaa", borderWidth:1}} 
        placeholder="Lastname"
        keyboardType="onChangeText"
        onChangeText={text => setb(text)}
        />
        <Button title="name" onPress={ alertName}></Button>
        <View style={{height:50}}></View>

        <TextInput
        style={{height: 40, borderColor:"#000000", borderWidth:1}}
        placeholder="input number"
        keyboardType="number-pad"
        onChangeText={text => setA(text)}
      />
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="+" value="plus" />
        <Picker.Item label="-" value="minus" />
        <Picker.Item label="x" value="multiple" />
        <Picker.Item label="/" value="divide" />
      </Picker>
      <TextInput
        style={{height: 40, borderColor:"#000000", borderWidth:1}}
        placeholder="input number"
        keyboardType="number-pad"
        onChangeText={text => setB(text)}
      />
      <Button title="calculate" onPress={ calculate } />

  </View>

   );
 };
 
//  const PreviewLayout = ({
//    label,
//    children,
//    values,
//    selectedValue,
//    setSelectedValue,
//  }) => (
//    <View style={{ padding: 10, flex: 1 }}>
//      <Text style={styles.label}>{label}</Text>
//      <View style={styles.row}>
//        {values.map((value) => (
//          <TouchableOpacity
//            key={value}
//            onPress={() => setSelectedValue(value)}
//            style={[
//              styles.button,
//              selectedValue === value && styles.selected,
//            ]}
//          >
//            <Text
//              style={[
//                styles.buttonLabel,
//                selectedValue === value && styles.selectedLabel,
//              ]}
//            >
//              {value}
//            </Text>
//          </TouchableOpacity>
//        ))}
//      </View>
//      <View style={[styles.container, { [label]: selectedValue }]}>
//        {children}
//      </View>
//    </View>
//  );
 
//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      marginTop: 8,
//      backgroundColor: "aliceblue",
//    },
//    box: {
//      width: 50,
//    },
//    row: {
//      flexDirection: "row",
//      flexWrap: "wrap",
//    },
//    button: {
//      paddingHorizontal: 8,
//      paddingVertical: 6,
//      borderRadius: 4,
//      backgroundColor: "oldlace",
//      alignSelf: "flex-start",
//      marginHorizontal: "1%",
//      marginBottom: 6,
//      minWidth: "48%",
//      textAlign: "center",
//    },
//    selected: {
//      backgroundColor: "coral",
//      borderWidth: 0,
//    },
//    buttonLabel: {
//      fontSize: 12,
//      fontWeight: "500",
//      color: "coral",
//    },
//    selectedLabel: {
//      color: "white",
//    },
//    label: {
//      textAlign: "center",
//      marginBottom: 10,
//      fontSize: 24,
//    },
//  });
 
//  export default FlexDirectionBasics;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});


export default PizzaTranslator;
