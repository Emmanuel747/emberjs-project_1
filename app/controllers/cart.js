import Controller from '@ember/controller';

export default class CartController extends Controller {
  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }
  get tax() {
    // eslint-disable-next-line prettier/prettier
    return 0.10 * this.subtotal;
  }
  get total() {
    return this.tax + this.subtotal;
  }
}
