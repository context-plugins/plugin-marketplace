import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cartItems4Schema, type CartItems4 } from "./unions/cart-items4.js";
import { deliveryMethodSchema, type DeliveryMethod } from "./unions/delivery-method.js";
import { deliveryType1Schema, type DeliveryType1 } from "./unions/delivery-type1.js";
import { isGuestBuyerSchema, type IsGuestBuyer } from "./unions/is-guest-buyer.js";
import { totalDiscountSchema, type TotalDiscount } from "./unions/total-discount.js";

export type ForterAntiFraudOptions = {
  /** The delivery type */
  deliveryType?: DeliveryType1;
  /** The delivery method */
  deliveryMethod?: DeliveryMethod;
  /** Defines if this payment is made using guest checkout. */
  isGuestBuyer?: IsGuestBuyer;
  /** A list of cart items details to pass to the Forter API. */
  cartItems?: CartItems4;
  /** Information about the discount applied to this order. */
  totalDiscount?: TotalDiscount;
};

export const forterAntiFraudOptionsSchema: Schema<ForterAntiFraudOptions> = s.object<ForterAntiFraudOptions>({
  deliveryType: s.optional(s.lazy(() => deliveryType1Schema)),
  deliveryMethod: s.optional(s.lazy(() => deliveryMethodSchema)),
  isGuestBuyer: s.optional(s.lazy(() => isGuestBuyerSchema)),
  cartItems: s.optional(s.lazy(() => cartItems4Schema)),
  totalDiscount: s.optional(s.lazy(() => totalDiscountSchema)),
  _keysMap: {
    deliveryType: "delivery_type",
    deliveryMethod: "delivery_method",
    isGuestBuyer: "is_guest_buyer",
    cartItems: "cart_items",
    totalDiscount: "total_discount",
  },
});
