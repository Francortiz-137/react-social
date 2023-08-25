import {Link} from 'react-router-dom';
import {auth} from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth';

export const Navbar = () => {
    const [user] = useAuthState(auth);

    const signUserOut = async() => {
        await signOut(auth);
    }
    return <nav> 
                <ul>
                    <Link to='/'>Home</Link>
                    {!user ? <Link to="/login">Login</Link>: 
                    <Link to='/createpost'>Create Post</Link>}
                </ul>

                <div className='nav-profile'>
                    {user && 
                    <>
                        <p>{user?.displayName}</p>
                        <img src={user?.photoURL || ""} alt="profile pic" />
                        <button onClick={signUserOut}>Log out</button>
                    </>
                    }
                </div>
            </nav>
}