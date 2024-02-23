
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import { SocketContext, socket } from './core/context/socket'

function App(): JSX.Element {
  return (
    <>
      <SocketContext.Provider value={socket}>
        <Navbar></Navbar>
        <Dashboard></Dashboard>
      </SocketContext.Provider>
    </>
  )
}


export default App
