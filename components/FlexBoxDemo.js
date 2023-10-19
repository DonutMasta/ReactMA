import React from 'react'
import { StyleSheet,View } from 'react-native'

const FlexBoxDemo = () => {
    return (
        <View style={styles.containerView}>
            <View style={[styles.box,styles.box1]}/>
            <View style={[styles.box,styles.box2]}/> 
            <View style={[styles.box,styles.box3]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
    },
    box: {
        width:100,
        height: 100
    },
    box1: {
        backgroundColor: 'red'
    },
    box2: {
        backgroundColor: 'yellow',
    },
    box3: {
        backgroundColor: 'orange'
    }
})

export default FlexBoxDemo