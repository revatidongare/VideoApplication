import axios from 'axios';

const KEY = 'AIzaSyA9H-NMQwZkJDxl5khLHbyinerHzAF5mqc';

export default axios.create({
baseURL: 'https://www.googleapis.com/youtube/v3',
params:{
    part: 'snippet',
    maxResults: 5,
    key: KEY
}
});

