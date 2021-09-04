import React from 'react'
import Center from './components/Center'
import Leftbar from './components/Leftbar'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import { BrowserRouter,Route,Switch } from 'react-router-dom'


const App = () => {
  return (
    <>
     <Navbar/>
    
     <Rightbar/>


     <BrowserRouter>
     <Leftbar/>
       <Switch>
         <Route exact path="/https://bushranikhat.github.io/webAssignment/"  render={(props) => (
          <Center {...props} empty={true} />
  )} />
         <Route exact path="https://bushranikhat.github.io/webAssignment/travel" render={(props) => (
          <Center {...props} empty={false} />
  )}/>
         <Route path="https://bushranikhat.github.io/webAssignment/travel/:route" render={(props) => (
          <Center {...props} param={true} />
  )}/>
         
       </Switch>
     </BrowserRouter>
     
    </>
  )
}

export default App
