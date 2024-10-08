import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import theme from './theme.js'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <ChakraProvider theme={theme}>
    <App/>
  </ChakraProvider>
</React.StrictMode>
)
