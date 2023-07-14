import SignIn from "./components/SignIn"
import SignOut from "./components/SignOut"
import ChatRoom from './components/ChatRoom'
import { auth } from "./configs/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import './style.scss'


function App() {

  const [user] = useAuthState(auth)
  return (
    <div className="body">
      <div className="app">
      {user? <ChatRoom/>: <SignIn/>}
      </div>

      <div style={{color: 'white', textAlign: 'center'}}>Don't get banned by voilating communiy guide lines</div>
    </div>
  )
}

export default App
