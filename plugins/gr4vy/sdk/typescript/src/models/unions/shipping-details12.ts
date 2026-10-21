import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { shippingDetailsSchema, type ShippingDetails } from "../shipping-details.js";

/** The shipping details associated with the catpure. */
export type ShippingDetails12 = ShippingDetails;

export const shippingDetails12Schema: Schema<ShippingDetails12> = s.of<ShippingDetails12>(
  s.union([s.lazy(() => shippingDetailsSchema)]),
);
