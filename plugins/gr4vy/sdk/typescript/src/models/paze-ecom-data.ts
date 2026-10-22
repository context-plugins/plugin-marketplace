import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cartcontainsgiftcardSchema, type Cartcontainsgiftcard } from "./unions/cartcontainsgiftcard.js";
import { finalShippingAddressSchema, type FinalShippingAddress } from "./unions/final-shipping-address.js";
import { orderforpickupSchema, type Orderforpickup } from "./unions/orderforpickup.js";
import { orderhighestcostSchema, type Orderhighestcost } from "./unions/orderhighestcost.js";
import { orderquantitySchema, type Orderquantity } from "./unions/orderquantity.js";

export type PazeEcomData = {
  /** Whether the current transaction includes a gift card purchase. */
  cartContainsGiftCard?: Cartcontainsgiftcard;
  /** Whether the consumer order will be picked up rather than shipped. */
  orderForPickup?: Orderforpickup;
  /** Dollar value of the most expensive item ordered. */
  orderHighestCost?: Orderhighestcost;
  /** Number of items ordered. */
  orderQuantity?: Orderquantity;
  /** The selected shipping address. Returned only when `shippingPreference` is not `NONE`. */
  finalShippingAddress?: FinalShippingAddress;
};

export const pazeEcomDataSchema: Schema<PazeEcomData> = s.object<PazeEcomData>({
  cartContainsGiftCard: s.optional(s.lazy(() => cartcontainsgiftcardSchema)),
  orderForPickup: s.optional(s.lazy(() => orderforpickupSchema)),
  orderHighestCost: s.optional(s.lazy(() => orderhighestcostSchema)),
  orderQuantity: s.optional(s.lazy(() => orderquantitySchema)),
  finalShippingAddress: s.optional(s.lazy(() => finalShippingAddressSchema)),
});
