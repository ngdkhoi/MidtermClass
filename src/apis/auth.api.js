import AxiosBasic from "../services/api";
import urls from './urls'

const login = ({username, password}) => {
    return AxiosBasic({
        url: urls.login,
        method: 'POST',
        data:{
            username,
            password,
        }
    })
}

const authApi = {
    login
}

export default authApi