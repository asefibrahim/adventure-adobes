import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Booking = () => {

    const [selectDate, setSelectDate] = useState(null)
    const [DAte, setDate] = useState(null)

    const data = useLoaderData()

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10 ">
                    <a
                        href="/"
                        aria-label="Go Home"
                        title="Logo"
                        className="inline-block mb-5"
                    >

                    </a>
                    <h5 className="mb-4 text-6xl font-extrabold leading-none text-orange-400">
                        {data.name}
                    </h5>
                    <p className="mb-6 text-white">
                        {data.description}
                    </p>
                    <hr className="mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                        <a
                            href="/"
                            className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                            </svg>
                        </a>
                        <a
                            href="/"
                            className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                <circle cx="15" cy="15" r="4" />
                                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                            </svg>
                        </a>
                        <a
                            href="/"
                            className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                            </svg>
                        </a>
                        <a
                            href="/"
                            className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                                <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <form action="" class="space-y-4">


                        <div class="grid grid-rows-1 gap-4 sm:grid-rows-2  bg-gray-200 p-10 rounded-lg w-3/4 mx-auto mt-12">
                            <div className='bg-gray-200'>
                                <p className='font-semibold text-slate-600 py-3'>Origin</p>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Dhaka"
                                    type="text"

                                />
                            </div>
                            <div>
                                <p className='font-semibold text-slate-600 py-3'>Destination</p>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Kualalampur"
                                    type="text"

                                />
                            </div>

                            <div className='flex gap-5'>
                                <div class="relative max-w-sm">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-900 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <DatePicker
                                        selected={DAte}
                                        onChange={date => setDate(date)}
                                        dateFormat='YYY/MM/dd'
                                        placeholderText='Select Starting Date'


                                        datepicker datepicker-buttons type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                </div>
                                <div class="relative max-w-sm">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <DatePicker selected={selectDate}
                                        onChange={date => setSelectDate(date)}
                                        dateFormat='YYY/MM/dd'
                                        placeholderText='Select Ending Date'
                                        datepicker datepicker-buttons type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Select End Date' />




                                </div>
                            </div>
                            <Link to={`/destination/${data.id}`}
                                class="group relative inline-flex items-center overflow-hidden rounded bg-amber-600  px-8 py-3 text-white focus:outline-none focus:ring active:bg-amber-700 "

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

                                <span class="text-sm font-medium  transition-all group-hover:ms-4">
                                    Start Booking !!
                                </span>
                            </Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;