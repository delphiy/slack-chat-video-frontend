import axios from 'axios'

export default class ApiService {
    apiURL = 'http://localhost:8003'

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
}