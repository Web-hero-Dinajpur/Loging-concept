import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/Firabase.init";
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState();

    const provider = new GoogleAuthProvider();

    const HandleGoogleAuthProvider = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                console.log('ERROR', error);
                setUser(null);
            })

    }

    const handleSingOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out done')
                setUser(null)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
           {
            user ? <button onClick={handleSingOut}>Sign Out</button>:
            <button onClick={HandleGoogleAuthProvider}>Google auth Provider</button>
           }
            {
                user &&
                <div>
                    <h2> UserName: {user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
            
           
        </div>
    );
};

export default Login;