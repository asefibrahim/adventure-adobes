import React from 'react';

const SingleDestination = ({ hotel }) => {
    const { name, description, location, imageUrl, price } = hotel
    return (
        <div className=''>




            <div >



                <div
                    class="relative border-gray-600  p-4   sm:px-6 lg:px-8"
                    aria-modal="true"
                    role="dialog"
                    tabindex="-1"
                >


                    <div class="mt-4 space-y-6">
                        <ul class="space-y-4">
                            <li class="md:flex  gap-4">
                                <img
                                    src={imageUrl}
                                    class="h-60 w-full rounded object-cover"
                                />

                                <div>
                                    <h3 class="text-2xl font-bold text-orange-400  ">{name}</h3>


                                    <div>
                                        <p className='text-slate-100 font-semibold mt-4'> {description}</p>
                                    </div>

                                    <div className='text-slate-100 font-semibold'>
                                        <p className=''><span className='text-orange-400  font-bold text-xl'>Location </span>: {location}</p>


                                        <p className='text-xl text-orange-400  font-bold my-3'> Price  :  $ {price} / Night</p>
                                    </div>

                                </div>
                                <div class="flex flex-1 items-center justify-end gap-2">




                                    <button class="text-gray-600 transition hover:text-red-600">
                                        <span class="sr-only">Remove item</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </li>



                        </ul>


                    </div>
                </div>


            </div>

        </div>
    );
};

export default SingleDestination;