import React from 'react';
import { Link } from 'react-router-dom';




const SingleInfo = ({ single, handleDetails }) => {
    const { id, name, image_url } = single


    return (
        <div >
            <a href="#" class="group relative block bg-black  ">
                <img
                    alt="Developer"
                    src={image_url}
                    class="absolute inset-0 h-full w-full  object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-4 sm:p-6 lg:p-8 ">


                    <p class="text-xl font-bold text-white sm:text-2xl">{name}</p>

                    <div class="mt-32 sm:mt-48 lg:mt-64 ">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 "
                        >
                            <Link onClick={() => handleDetails(id)}>
                                <a
                                    class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring active:text-indigo-500"

                                >
                                    View Details
                                </a></Link>
                        </div>
                    </div >
                </div >
            </a >

        </div >

    );
};



export default SingleInfo;