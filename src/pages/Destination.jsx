import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleDestination from './SingleDestination';




const Destination = () => {
    const hotels = useLoaderData()



    return (
        <div>
            <h1 className=' font-bold text-3xl ms-8 text-white '>Popular Hotels in this place</h1>
            <div className='grid grid-cols-3' >


                <div className='md:row-span-2 md:col-span-2'>
                    {
                        hotels.slice(0, 3).map(hotel => <SingleDestination hotel={hotel}></SingleDestination>)
                    }
                </div>
                <div>

                </div>

            </div>
        </div>
    );
};

export default Destination;