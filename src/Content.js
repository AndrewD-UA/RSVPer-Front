import './css/Content.css'

export const options = ["Home", "Information", "RSVP"]

export default function Content(props){
    return (
        <div className = "contentContainer">
            {
                props.pageState
            }
        </div>
    );
}