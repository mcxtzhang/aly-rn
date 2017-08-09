'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TopBar from './common/topbar'
import {NativeModules} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            text:''
        }

    }
    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <RadioGroup style={{flex:1}}
                    onSelect={(index, value) => this.onSelect(index, value)}
                >
                    <RadioButton value={'item1'}  style={{flex:1}} >
                        <Text>This yjhkhkis item #1</Text>
                    </RadioButton>

                    <RadioButton value={'item2'} style={{flex:1}} >
                        <Text>Thislklk is item #2</Text>
                    </RadioButton>

                    <RadioButton value={'item3'}  style={{flex:1}} >
                        <Text>This im;lk;k;k;s item #3</Text>
                    </RadioButton>
                </RadioGroup>

                <Text >{this.state.text}</Text>

            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hello: {
        fontSize: 20,
        margin: 10,
    },
});

