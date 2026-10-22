import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount4Schema, type Amount4 } from "./unions/amount4.js";
import { type511Schema, type Type511 } from "./unions/type511.js";

export type PaypalShippingOptionsItem = {
  /** A unique ID that identifies a payer-selected shipping option. */
  id: string;
  /** A description that the payer sees, which helps them choose an appropriate shipping option. */
  label: string;
  /**
   * If the API request sets selected = true, it represents the shipping option that the payee or
   * merchant expects to be pre-selected for the payer when they first view the shipping.options in
   * the PayPal Checkout experience. Only one shipping.option can be set to selected=true.
   */
  selected: boolean;
  /** A classification for the method of purchase fulfillment. */
  type?: Type511;
  /** The shipping cost for the selected option. */
  amount?: Amount4;
};

export const paypalShippingOptionsItemSchema: Schema<PaypalShippingOptionsItem> =
  s.object<PaypalShippingOptionsItem>({
    id: s.string(),
    label: s.string(),
    selected: s.boolean(),
    type: s.optional(s.lazy(() => type511Schema)),
    amount: s.optional(s.lazy(() => amount4Schema)),
  });
