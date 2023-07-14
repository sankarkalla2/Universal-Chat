import React from 'react'
import { auth } from '../configs/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function SignOut() {

  const [user] = useAuthState(auth)
  return user && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default SignOut