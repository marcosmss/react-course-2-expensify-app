import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const startLoginFacebook = () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);
};

export const logout = () => ({
   type: 'LOGOUT' 
});

export const startLogout = () => {
    return firebase.auth().signOut();
};