import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { shippingDetailsSchema, type ShippingDetails } from "../shipping-details.js";

/** The shipping details for the payment link. */
export type ShippingDetails11 = ShippingDetails;

export const shippingDetails11Schema: Schema<ShippingDetails11> = s.of<ShippingDetails11>(
  s.union([s.lazy(() => shippingDetailsSchema)]),
);
