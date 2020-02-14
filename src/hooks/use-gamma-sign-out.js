import { useCallback, useContext } from "react";
import DigitGammaContext, { SIGN_OUT } from "../contexts/DigitGammaContext";
import useDigitToast from "./use-digit-toast";
import useGammaSignIn from "./use-gamma-sign-in";
import { useHistory } from "react-router";
import trimEnd from "lodash/trimEnd";

export function signOut(
    name,
    queueToast,
    dispatch,
    signIn,
    toastSignedOutText,
    toastDuration,
    toastSignBackInText,
    gammaPath,
    signOutFromGamma,
    signOutTo,
    history
) {
    sessionStorage.removeItem("auth-" + name);

    if (signOutFromGamma) {
        window.location.href = trimEnd(gammaPath, "/") + "/logout";
    } else {
        history.push(signOutTo);
        dispatch({ SIGN_OUT });
    }

    queueToast({
        actionHandler: () => {
            signIn();
        },
        text: toastSignedOutText,
        duration: toastDuration,
        actionText: toastSignBackInText
    });
}

function useGammaSignOut() {
    const [state, dispatch] = useContext(DigitGammaContext);
    const [queueToast] = useDigitToast();
    const history = useHistory();

    const signIn = useGammaSignIn();

    const {
        name,
        toastSignedOutText,
        toastDuration,
        toastSignBackInText,
        gammaPath,
        signOutFromGamma,
        signOutTo
    } = state.options;

    const signOutCB = useCallback(() => {
        signOut(
            name,
            queueToast,
            dispatch,
            signIn,
            toastSignedOutText,
            toastDuration,
            toastSignBackInText,
            gammaPath,
            signOutFromGamma,
            signOutTo,
            history
        );
    }, [
        name,
        queueToast,
        dispatch,
        signIn,
        toastSignedOutText,
        toastDuration,
        toastSignBackInText,
        gammaPath,
        signOutFromGamma,
        signOutTo
    ]);
    return signOutCB;
}

export default useGammaSignOut;
