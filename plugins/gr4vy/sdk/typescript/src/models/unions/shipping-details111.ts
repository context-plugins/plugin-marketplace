import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { shippingDetailsSchema, type ShippingDetails } from "../shipping-details.js";

/** The shipping details associated with the transaction. */
export type ShippingDetails111 = ShippingDetails;

export const shippingDetails111Schema: Schema<ShippingDetails111> = s.of<ShippingDetails111>(
  s.union([s.lazy(() => shippingDetailsSchema)]),
);
