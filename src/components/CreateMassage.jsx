import React, { useState } from 'react'
import { auth, db } from '../configs/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const massageRef = collection(db, 'massages')

function CreateMassage() {

  const [massage, setMassage] = useState('')
  const { uid, photoURL } = auth.currentUser;

  const sendMassage = async(e) => {
    e.preventDefault()

    await addDoc(massageRef, {
      text: massage,
      createdAt : serverTimestamp(),
      uid,
      photoURL
    })
    setMassage('')
    
  }

  return (
    <div className='create-massage'>
      <form onSubmit={sendMassage}>
        <input 
          type="text"
          onChange={(e) => setMassage(e.target.value)}
          value={massage}
          placeholder='type something....'
          required

        />
      </form>

      <button type='submit'>🕊️</button>
    </div>
  )
}

export default CreateMassage