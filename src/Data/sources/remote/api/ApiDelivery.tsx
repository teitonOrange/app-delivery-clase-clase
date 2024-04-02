import axios from "axios";

// EMULATOR ANDROID URL = http://10.0.2.2

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.100.8:8080/api/',
    headers: {
        'Content-type': 'application/json'
    }
});

export { ApiDelivery }