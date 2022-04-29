import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css';

function MeetupList(props) {
    return (
        <ul>
           {props.meetups.map(meetup =>  <MeetupItem 
           key={meetup.id}
           id={meetup.id}
           image={meetup.images}
           title={meetup.title}
           address={meetup.address}
           description={meetup.description}
           />
           ) }
        </ul>
    )
}


export default MeetupList;