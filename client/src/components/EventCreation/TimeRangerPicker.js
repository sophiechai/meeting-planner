import React, { useState } from 'react';
import '../../css/EventCreation/TimeRangePicker.css';
import TimeSlider from './TimeSlider';
import {storeStartTime, storeEndTime} from '../../redux/meetingCreation'
import { useSelector, useDispatch } from 'react-redux';

const sliderMarks = [
    {value: 9, label: '09:00'},
    {value: 12, label: 'Noon'},
    {value: 17, label: '17:00'}
]

function roundToHour(timeStr) {
    let time = timeStr.split(':')
    if (time[1] !== '00') {
        time[1] = '00'
    }
    return time[0] + ':' + time[1];
}

function sliderTime(timeStr) {
    return Number(timeStr.split(':')[0]);
}

function sliderTimeToString(sliderTime) {
    let timeStr = sliderTime+':00'
    timeStr = ((sliderTime / 10) < 1) ? ('0'+timeStr) : timeStr;

    return timeStr;
}

function TimeRangePicker() {
    const dispatch = useDispatch();
    const meetingCreationStore = useSelector(state => state.meetingCreation);

    const [startTime, setStartTime] = useState(sliderTimeToString(meetingCreationStore['start-time']));
    const [endTime, setEndTime] = useState(sliderTimeToString(meetingCreationStore['end-time']));
    const [sliderNums, setSliderNums] = useState([meetingCreationStore['start-time'], meetingCreationStore['end-time']]);
    
    function handleSliderChange(event, newValues) {
        setSliderNums(newValues);
        setStartTime(sliderTimeToString(newValues[0]));
        setEndTime(sliderTimeToString(newValues[1]));
        dispatch(storeStartTime(newValues[0]))
        dispatch(storeEndTime(newValues[1]))
    }

    function handleStartTimeChange(e) {
        const targetValue = sliderTime(e.target.value) < sliderTime(endTime) ? 
        e.target.value : endTime; 
        setSliderNums([sliderTime(targetValue), sliderNums[1]])
        setStartTime(roundToHour(targetValue))
        dispatch(storeStartTime(sliderTime(targetValue)))
    }

    function handleEndTimeChange(e) {
        const targetValue = sliderTime(e.target.value) > sliderTime(startTime) ? 
        e.target.value : startTime; 
        setSliderNums([sliderNums[0], sliderTime(targetValue)])
        setEndTime(roundToHour(targetValue))
        dispatch(storeEndTime(sliderTime(targetValue)))
    }

    return (
        <div id='time-of-day'>
            <h2>What time might work? </h2>
            <div className='pick-time-range' id='pick-time-range'>
                <div className='time-field'>
                    <label>No Earlier Than: </label>
                    <input type='time' value={startTime} 
                        onChange={handleStartTimeChange}
                        step={3600} />
                    {/* <TimePicker value={startTime} onChange={setStartTime} disableClock={true}/> */}
                </div>
                <div className='time-field'>
                    <label>No Later Than: </label>
                    <input type='time' value={endTime} 
                        onChange={handleEndTimeChange}
                        step={3600} />
                    {/* <TimePicker value={endTime} onChange={setEndTime} disableClock={true}/> */}
                </div>
                <TimeSlider
                sliderNums = {sliderNums}
                handleSliderChange={handleSliderChange}
                sliderMarks = {sliderMarks}/>
            </div>
            <TimeRangeText
            startTime={startTime}
            endTime={endTime}/>
        </div>
    );
}

function TimeRangeText(props) {

    return (
        <div id="time-range-text">
            { (props.startTime !== null & props.endTime !== null) ? (
                <div>
                    <p>Between <strong>{props.startTime}</strong> and <strong>{props.endTime}</strong></p>
                </div>
            ) : <p></p>}
        </div>
    )
}

export default TimeRangePicker;