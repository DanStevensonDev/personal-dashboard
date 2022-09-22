import { useRef, SyntheticEvent, useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import moment from 'moment';

import classes from './HealthDataForm.module.css'
import postHealthData from '../utils/postHealthData';
import { HealthDataInterface} from '../utils/interfaces';

const HealthDataForm = () => {
    // loading states
    const [isLoading, setIsLoading] = useState(true);
    const [loadedHealthData, setLoadedHealthData] = useState([])

    // form values
    const dateToday = moment().format().split("T")[0]
    const [dateValue, setDateValue] = useState(dateToday)
    const [sleepStartTimeValue, setSleepStartTimeValue] = useState("23:00")
    const [sleepEndTimeValue, setSleepEndTimeValue] = useState("07:00")
    
    // form data refs
    const dateInputRef = useRef<HTMLInputElement>();
    const sleepStartTimeInputRef = useRef<HTMLInputElement>();
    const sleepEndTimeInputRef = useRef<HTMLInputElement>();

    // utils
    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault(); 

        const healthData: HealthDataInterface = {
            date: dateInputRef.current?.value, 
            sleepStartTime: sleepStartTimeInputRef.current?.value,
            sleepEndTime: sleepEndTimeInputRef.current?.value,
        }
        
        postHealthData(healthData)
    }
    
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Stack
                spacing={3}
                sx={{ width: 200 }}
            >
                <TextField
                    required
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue={dateValue}
                    inputRef={dateInputRef}
                    // onChange={} // TODO: get date-specific data to populate form fields
                />

                <TextField
                    id="sleepStartTime"
                    label="Sleep start time (yesterday)"
                    inputRef={sleepStartTimeInputRef}
                    type="time"
                    defaultValue={sleepStartTimeValue}
                />

                <TextField
                    id="sleepEndTime"
                    label="Sleep end time (today)"
                    inputRef={sleepEndTimeInputRef}
                    type="time"
                    defaultValue={sleepEndTimeValue}
                />
            
                <Button
                    type='submit'
                    variant="contained"
                >
                    Submit data
                </Button>
            </Stack>
        </form>
    )
}

export default HealthDataForm;