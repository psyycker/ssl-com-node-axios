import axios from 'axios';
import fs from 'fs';
import https from 'https';

(
  function(){
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false, // (NOTE: this will disable client verification)
      cert: fs.readFileSync("client.crt"),
      key: fs.readFileSync("client.key"),
      ca: fs.readFileSync("ca.crt")
    })

    axios.get('https://localhost:8080', { httpsAgent })
      .then((response) => {
        console.log(response.data);
      })
  }
)()
