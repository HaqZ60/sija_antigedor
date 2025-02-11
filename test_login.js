import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  // Request page containing a form
  let res = http.get('http://10.201.1.138:800/eazyn/login.php');

  // Now, submit form setting/overriding some fields of the form
  res = res.submitForm({
    formSelector: 'form',
    fields: { username: 'mutiara', password: '123456' },
  });
  sleep(3);
}