import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

const apiCall =  {
  search: function(numUsers) {
    const OPTIONS = { params: { results:numUsers, inc:"name,email,login,dob,phone,picture", nat:"us" } }
    return axios.get(BASEURL,OPTIONS);
  }
}

export default apiCall;
