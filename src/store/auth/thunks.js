import { registerUserWithEmailPassword, singInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSingIn = () => {
    return async(dispatch) => {

        dispatch(checkingCredentials());

        const result = await singInWithGoogle();
        if( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ) );

    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());

        const {ok,uid,photoURL,errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

        if(!ok) return dispatch( logout({errorMessage}) );

        dispatch( login( {uid, photoURL, email, displayName} ) );
    }
}

export const startLoginWithEmailPassword = (email, password) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
    
        const result = await loginWithEmailPassword({email, password})
        if( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ) );
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
        await logoutFirebase();
        dispatch( logout({errorMessage: null}) )
    }
}