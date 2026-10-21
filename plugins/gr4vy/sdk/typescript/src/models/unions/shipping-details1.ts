import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { shippingDetailsCreateSchema, type ShippingDetailsCreate } from "../shipping-details-create.js";

/** The optional shipping details for this buyer. */
export type ShippingDetails1 = ShippingDetailsCreate;

export const shippingDetails1Schema: Schema<ShippingDetails1> = s.of<ShippingDetails1>(
  s.union([s.lazy(() => shippingDetailsCreateSchema)]),
);
