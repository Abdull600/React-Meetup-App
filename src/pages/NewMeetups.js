import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../meetups/NewMeetupForm";

function NewMeetupsPage() {
    const history = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://meetup-app-d7cc7-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'content-Type': 'application/json' 
                }
            }
            ).then(() => {
                history('/');
            });
    }
    return (
        <div>
             <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>

       
    )
}


export default NewMeetupsPage;