import { getFeaturedEvents } from '../dummy-data'; 
import EventList from '../components/events/events-list';

function HomePage(){
    const featuredEvents = getFeaturedEvents();

    return(
        <div>
            <ul>
                <EventList items={featuredEvents} />
            </ul>
        </div>
    )
}

export default HomePage; 