import axios from 'axios'

const firebaseUrl = process.env.REACT_APP_FIREBASE_URL

const getHealthData = async () => {
    const responseData = await axios.get(`${firebaseUrl}/health.json`)
    return responseData
}

export default getHealthData; 