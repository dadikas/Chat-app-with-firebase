import { useContext } from 'react';
import { AES } from 'crypto-js';
import { AuthContext } from './context/AuthContext';

const encryptMessage = (message) => {
  const { currentUser } = useContext(AuthContext);
  const secretKey = currentUser.uid;
  return AES.encrypt(message, secretKey).toString();
};
const handleTextChange = (e) => {
  const encryptedText = encryptMessage(e.target.value);
  setText(encryptedText);
};