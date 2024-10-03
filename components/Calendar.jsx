'use client'
import { baseRating, gradients } from '@/utils'
import { Fugaz_One } from 'next/font/google'
import React, { useState } from 'react'

const months = { 'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec' }
const monthsArr = Object.keys(months)
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

const Calendar = (props) => {
    const { demo, completeData, handleSetMood } = props;



    const now = new Date();
    const currMonth = now.getMonth();
    const [selectedMonth, setSelectMonth] = useState(Object.keys(months)[currMonth]);
    const [selectedYear, setSelectedYear] = useState(now.getFullYear());

    const numericMonth =  monthsArr.indexOf(selectedMonth);

    const data = completeData?.[selectedYear]?.[numericMonth] || {}
    console.log('This month data : ', completeData?.[selectedYear]?.[selectedMonth] );

    const handleIncrementMonth = (val) => {
        // Your future logic for incrementing months
        if (numericMonth + val < 0) {
            // set month value = 11 and decrement the year
            setSelectedYear(curr => curr - 1)
            setSelectMonth(monthsArr[monthsArr.length - 1])
        } else if (numericMonth + val > 11) {
            // set month val = 0 and increment the year
            setSelectedYear(curr => curr + 1)
            setSelectMonth(monthsArr[0])
        } else {
            setSelectMonth(monthsArr[numericMonth + val])
        }
    }

    console.log('Selected Month:', selectedMonth);

    // Create a Date object for the first day of the selected month and year
    const monthNow = new Date(selectedYear, Object.keys(months).indexOf(selectedMonth), 1);
    const firstDateOfMonth = monthNow.getDay(); // Day of the week (0 - 6) for the 1st of the month
    const daysInMonth = new Date(selectedYear, Object.keys(months).indexOf(selectedMonth) + 1, 0).getDate(); // Total days in the selected month

    const daysToDisplay = firstDateOfMonth + daysInMonth;
    const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);

    return (


        <div className='flex flex-col gap-2'> 
                    <div className='grid grid-cols-5 gap-4'>
                        <button
                                onClick={() => handleIncrementMonth(-1)}
                                className='mr-auto text-indigo-400 text-lg sm:text-xl duration-200 hover:opacity-60'>
                                &#9664; {/* Left arrow Unicode symbol */}
                        </button>
                        <p className={'text-center col-span-3 capitalized whitespace-nowrap textGradient ' + fugaz.className}>
                                {selectedMonth}, {selectedYear}
                        </p>
                        <button
                                onClick={() => handleIncrementMonth(+1)}
                                className='ml-auto text-indigo-400 text-lg sm:text-xl duration-200 hover:opacity-60'>
                                &#9654; {/* Right arrow Unicode symbol */}
                        </button>
                    </div>

        <div className='flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10'>
            {[...Array(numRows).keys()].map((row, rowIdx) => {
                return (
                    <div key={rowIdx} className='grid grid-cols-7 gap-1'>
                        {dayList.map((dayOfWeek, dayOfWeekIdx) => {
                            let dayIndex = (rowIdx * 7) + dayOfWeekIdx - firstDateOfMonth + 1;

                            let dayDisplay = dayIndex > daysInMonth
                                ? false
                                : rowIdx === 0 && dayOfWeekIdx < firstDateOfMonth
                                    ? false
                                    : true;

                            // Check if the current day is today
                            let isToday =
                                dayIndex === now.getDate() &&
                                selectedMonth === Object.keys(months)[now.getMonth()] &&
                                selectedYear === now.getFullYear();

                            if (!dayDisplay) {
                                return (
                                    <div className='bg-white' key={dayOfWeekIdx} />
                                );
                            }

                            let color = demo
                                ? gradients.indigo[baseRating[dayIndex]]
                                : dayIndex in data
                                    ? gradients.indigo[data[dayIndex]]
                                    : 'white';

                            return (
                                <div
                                    style={{ background: color }}
                                    className={
                                        'text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg ' +
                                        (isToday ? 'border-indigo-400' : 'border-indigo-100') +
                                        (color === 'white' ? ' text-indigo-400' : ' text-white')
                                    }
                                    key={dayOfWeekIdx}
                                >
                                    <p>{dayIndex}</p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
        </div>
    )
}

export default Calendar
