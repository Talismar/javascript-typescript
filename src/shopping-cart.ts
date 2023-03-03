type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = "open" | "closed";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = "open";

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.slice(index, 1);
  }

  public get items(): Readonly<CartItem[]> {
    return this._items;
  }

  public get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log("Empty shopping cart");
      return;
    }

    this._orderStatus = "closed";
    this.sendMessage("Seu pedido foi recebido...");
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string) {
    console.log(msg);
  }

  saveOrder() {
    console.log("Saving order...");
  }

  clear() {
    console.log("Shopping cart was send with sucesso");
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: "Camiseta", price: 165 });
shoppingCart.checkout();
