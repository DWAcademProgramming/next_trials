import Head from 'next/head'; 

import { getFeaturedEvents } from '../helpers/api-utils'; 
import EventList from '../components/events/events-list';

function HomePage(props){
    return(
        <div>
            <Head>
                <title>Next JS events</title>
                <meta 
                    name='description'
                    content='Find the next great events happening in your area'
                />
            </Head>
            <EventList items={props.events} />
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