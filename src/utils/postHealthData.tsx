import axios from 'axios'

import { HealthData } from './interfaces';

const firebaseUrl = process.env.REACT_APP_FIREBASE_URL

const postHealthData = (healthData: HealthData) => {
    console.log(healthData);

    axios.post(`${firebaseUrl}/health.json`, healthData)
        .then((response) => {
            console.log(response);
    })
}

export default postHealthData; 