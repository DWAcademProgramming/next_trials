import { getFeaturedEvents } from '../helpers/api-utils'; 
import EventList from '../components/events/events-list';

function HomePage(props){
    return(
        <div>
            <ul>
                <EventList items={props.events} />
            </ul>
        </div>
    )
}


export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents(); 

    return {
        props:{
            events: featuredEvents
        }, 
        revalidate: 36000
    }
}


export default HomePage; 