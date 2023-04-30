import React, { useEffect, useState } from 'react';

import SingleInfo from './SingleInfo';
import { Link } from 'react-router-dom';



const BannerFirst = () => {
    const [place, setPlace] = useState([])
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('http://localhost:4500/places')
            .then(res => res.json())
            .then(data => setPlace(data.slice(0, 3)))
    }, [])

    const handleDetails = (id) => {
        const foundPlace = place.find(p => p.id === id)
        setDetails(foundPlace)
    }
    return (

        <div className='text-center' >




            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">

                        </div>
                        <div className="max-w-xl mb-6">



                            <div className='text-white w-3/4 mx-auto  text-start space-y-10 '>
                                <p className='text-5xl font-bold'>{details.name}</p>
                                <p>{details.description}</p>
                                {
                                    details.name && <Link
                                        class="group relative inline-flex items-center overflow-hidden rounded bg-orange-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                                        to={`/booking/${details.id}`}
                                    >
                                        <span class="absolute -start-full transition-all group-hover:start-4">
                                            <svg
                                                class="h-5 w-5 rtl:rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </span>

                                        <span class="text-sm font-medium transition-all group-hover:ms-4">
                                            Book Now  !!
                                        </span>
                                    </Link>

                                }
                            </div>



                        </div>
                        <div>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                    </div>








                    <div className=" grid grid-cols-3  lg:pl-8">








                        {
                            place.map(single => <SingleInfo single={single} handleDetails={handleDetails}></SingleInfo>)
                        }

                    </div>

                </div>
            </div>

        </div>


    );

};


export default BannerFirst;