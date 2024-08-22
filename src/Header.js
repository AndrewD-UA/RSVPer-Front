import "./css/Header.css"
import Home from "./Home"
import Information from "./Information"
import RSVP from "./RSVP"

import { options } from './Content'

function determinePage(destination, change){
    switch(destination){
        case options[0]: change(<Home/>);               break;
        case options[1]: change(<Information/>);        break;
        case options[2]: change(<RSVP/>);               break;
        default:console.error("Invalid page passed");   break;
    }

    console.log(destination);
}

export default function Header(props){
    return (
        <div className = "headerContainer">
            <h1 className = "headerText">Wedding!</h1>
            <div className = "buttonsContainer">
            {
                options.map((text)=>{
                    return <button className = "headerButton"
                                    onClick={()=>determinePage(text, props.changePage)}>{text}</button>
                })
            }
            </div>
        </div>
    );
}