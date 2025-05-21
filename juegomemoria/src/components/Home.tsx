import { View } from 'react-native'
import React from 'react'
import CartaComponent from './CartaComponent'
import PartidasComponent from './PartidasComponent'

export default function Home() {
    return (
        <View>
            <CartaComponent />
            <PartidasComponent />
        </View>
    )
}