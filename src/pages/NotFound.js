import {React , Fragment} from "react";
import { ButtonBackToHome } from "./ButtonBackToHome";




export function NotFound(){
    return(
        <Fragment>
            <h1 className="title">404!</h1>
            <h2 className="subtitle">Page not Found</h2>
            <ButtonBackToHome/>
        </Fragment>
    )
}