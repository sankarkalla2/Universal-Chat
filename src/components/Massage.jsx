import React from 'react'
import { auth } from '../configs/firebase';

function Massage(props) {

  const { uid, text, photoURL, id } = props.massage;

  const masterClass = uid === auth.currentUser.uid? "send": "received"
  return (
    <div className={`massage ${masterClass}`}>
      <img src={photoURL} alt="" />
      <span>{text}</span>
    </div>
  )
}

export default Massage