import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase';
import axios from 'axios'
import { signInSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try{
           const provider =  new GoogleAuthProvider()
           const auth = getAuth(app);
           const result = await signInWithPopup(auth,provider);
           console.log('result',result);
           const data = await axios({
            url: '/api/auth/google',
            method: 'POST',
            data: {
              name: result.user.displayName,
              email: result.user.email,
              photo: result.user.photoURL
            },
            headers: {
              'Content-Type': 'application/json'
            }
           });
           dispatch(signInSuccess(data));
           navigate('/')
        }catch(e){
            console.log('couldnot sign in with google');
        }
    }
  return (
    <button type="button" 
    onClick={handleGoogleClick}
    className="text-white uppercase bg-red-500 rounded p-3 hover:opacity-95"> continue with google</button>
  )
}
