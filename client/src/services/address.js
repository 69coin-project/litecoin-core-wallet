import {HttpWrapper} from 'services/http-wrapper';
import {AddressInfo} from 'models/address-info';

export class AddressService {
  http;

  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getAddressInfo(address) {
    return this.http.get(`/addresses/${address}`).then(result => {
      return result.map(item => {
        return new AddressInfo(item);
      });
    });
  }
}
