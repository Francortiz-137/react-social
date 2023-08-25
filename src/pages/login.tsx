import { auth, provider} from "../config/firebase";
import { signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth,provider);
        console.log("result", result) // user object is returned here
        navigate('/');
    }

    return <main>
                <p>Sign in with google to continue</p>
                <button onClick={signInWithGoogle}>Sign in With Google</button>
            </main>
}