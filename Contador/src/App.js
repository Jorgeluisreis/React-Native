import React from 'react'
import {StatusBar} from 'react-native'

import Contador from './components/Contador'

export default () => (
    <>
        <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
        />
        
        <Contador incial={0} passo={1}/>
    </>
)