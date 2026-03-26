import axios from "axios";

const yugioh = axios.create({
    baseURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php"
});

export default yugioh;