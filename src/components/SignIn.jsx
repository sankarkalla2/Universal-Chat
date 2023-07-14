import React from 'react'
import { auth, provider } from '../configs/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

function SignIn() {
  const [user] = useAuthState(auth)

  const handleSignIn = async() => {
    await signInWithPopup(auth, provider)

    console.log(user?.email)
  }

  return (
    <div className='sign-in'> 
      <button onClick={handleSignIn}>Sign In With Google</button>
      <div>Don't get banned by sending vulnerable msgs</div>
    </div>
  )
}

export default SignIn