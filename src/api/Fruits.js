import Api from './Api';

export default {
    all_fruits() {
        return Api.get('fruit/all')
    }
}