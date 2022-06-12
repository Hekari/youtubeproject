import axios from "axios";
const KEY = "AIzaSyDJVPg_8iyigi3mIE3qcpjiohUDtSd3ApI";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
