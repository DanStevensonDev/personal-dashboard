import { useEffect, useState } from "react";
import axios from "axios";

import { HealthDataInterface } from "../utils/interfaces";

const firebaseUrl = process.env.REACT_APP_FIREBASE_URL

const HealthData = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedHealthData, setLoadedHealthData] = useState([])

    useEffect(() => {
        axios.get(`${firebaseUrl}/health.json`)
            .then(({data}) => {
                setLoadedHealthData(data)
                setIsLoading(false);
            })
    }, [isLoading])

    if (isLoading) {
        return (
            <p>Loading</p>
        )
    } else {
        const formattedData: HealthDataInterface[] = []

        for (const key in loadedHealthData) {
            formattedData.push({
                key, 
                ...(loadedHealthData[key] as Record<string, unknown>)
            })
        }
        
        return (
            <div>
                <h2>Sleep data</h2>
                {formattedData.map((item) => (
                    <ul>
                        <li key={item.key}>{item.date}: From {item.sleepStartTime} to {item.sleepEndTime}</li>
                    </ul>
                ))}
            </div>
        )
    }

}

export default HealthData;