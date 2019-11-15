import axios from 'axios'
import * as Config from '../constants/Config'

export default function callApi(endpoint,method='GET',body) {
    console.log(body);

    return axios({
        method: method,
        url: `${Config.APIUrl}/${endpoint}`,
        body: body
    }).catch(err => {
        console.log(err);
    })
}