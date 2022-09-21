import { useRef, SyntheticEvent } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import moment from 'moment';

import classes from './HealthDataForm.module.css'
import postHealthData from '../utils/postHealthData';
import { HealthData } from '../utils/interfaces';

const HealthDataForm = () => {
    // data refs
    const dateInputRef = useRef<HTMLInputElement>();
    const sleepStartTimeInputRef = useRef<HTMLInputElement>();
    const sleepEndTimeInputRef = useRef<HTMLInputElement>();

    // utils
    const dateToday = moment().format().split("T")[0]

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault(); 

        const healthData: HealthData = {
            date: dateInputRef.current?.value || dateToday, 
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
                    defaultValue={dateToday}
                    inputRef={dateInputRef}
                />

                <TextField
                    id="sleepStartTime"
                    label="Sleep start time (yesterday)"
                    inputRef={sleepStartTimeInputRef}
                    type="time"
                    defaultValue="23:00"
                />

                <TextField
                    id="sleepEndTime"
                    label="Sleep end time (today)"
                    inputRef={sleepEndTimeInputRef}
                    type="time"
                    defaultValue="07:00"
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