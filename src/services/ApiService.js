import axios from 'axios'

export default class ApiService {
    apiURL = 'http://localhost:8003'
    api_token = localStorage.getItem('api_token')
    async doLoginSocial(accessToken, provider) {
        try {
            let response = await axios.post(this.apiURL + '/login', {
                access_token: accessToken,
                provider: provider
            })

            return response
        } catch (e) {
            console.log(e)
        }
    }

    async fetchRoomsWithUsers() {
        try {
            let response = await axios.get(this.apiURL + '/room?api_token=' + this.api_token)

            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}