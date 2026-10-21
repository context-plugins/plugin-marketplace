import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { shippingSchema, type Shipping } from "../shipping.js";
import { shipping1Schema, type Shipping1 } from "../shipping1.js";

/**
 * > 🚧 Private beta > > This property is currently in private beta, and the final specification may
 * still change.
 *
 * Shipping information for the Checkout Session. Provide either `options` or `callbackUrl`, not
 * both.
 *
 * The `lines` of the Checkout Session must not contain a line with type `shipping_fee`. When
 * `shipping` is set, `requiredCustomerDetails` must contain `shipping-address`.
 */
export type Shipping2 = Shipping | Shipping1;

export const shipping2Schema: Schema<Shipping2> = s.of<Shipping2>(
  s.union([s.lazy(() => shippingSchema), s.lazy(() => shipping1Schema)]),
);
