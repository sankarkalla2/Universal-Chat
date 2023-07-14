import React, { useEffect, useRef } from 'react'
import SignOut from './SignOut'
import CreateMassage from './CreateMassage'
import Massage from './Massage'

import { auth, db } from '../configs/firebase'
import { getDoc, doc, collection, query, orderBy, limit, limitToLast } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const massageRef = collection(db, 'massages');


function ChatRoom() {
  
  const dummy = useRef();
  const queryData = query(massageRef, orderBy('createdAt', 'asc'), limitToLast(20))
  const [massages] = useCollectionData(queryData, {idField: 'id'});
  
  // useEffect(() => {
  //   dummy.current.scrollIntoView({ behaviour: 'smooth'})
  // }, [massages])

  return (
    <div className='chat-room'>
      <header>
        <h2>Universal Chat</h2>
        <SignOut/>
      </header>
      <main className='chat-massages'>
        { 
          massages && massages.map((msg, index) => (<Massage key={index} massage={msg}/>))
        }
      </main>
      <CreateMassage/>
    </div>
  )
}

export default ChatRoom