'use client'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React , {useContext , useState , useEffect} from 'react';
import { auth,db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';



const AuthContext = React.createContext();

 const useAuth = () => {
    return useContext(AuthContext);
}

 const AuthProvider = ({children}) => {

    const [currentUser , setCurrentUser] = useState(null);
    const [userDataObj ,setUserDataObj] = useState(null);
    const [loading , setLoading] = useState(true);

    const signup = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const login = (email , password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setUserDataObj(null);
        setCurrentUser(null);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , async user => {

            try {

                setLoading(true);
                setCurrentUser(user)
                if(!user){
                    console.log('No User Found')
                    return
                }

                //if user exists , fetch data from fb db
                console.log('Fetching User data');

                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                let firebaseData = {};

                if(docSnap.exists()){
                    console.log('Found User Data');
                    firebaseData = docSnap.data();
                    console.log(firebaseData);
                }

                setUserDataObj(firebaseData);

            
            } catch (error) {
                console.log(`error`);
            } finally{
                setLoading(false);
            }
        }) 

        return unsubscribe;
        
    } , [])

    const value = {
        currentUser,
        userDataObj,
        loading,
        setUserDataObj,
        signup,
        login,
        logout
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}



export { useAuth , AuthProvider};