import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    iterations: 10,
    vus: 10,
    duration: '30s',
};

export default function () {
    // Make a GET req to the target url
    http.get("https:/10.201.1.138/eazyn/login.php");

    sleep(1);
}