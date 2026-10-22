import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The shipping method for this transaction. */
export type ShippingMethod = string;

export const shippingMethodSchema: Schema<ShippingMethod> = s.of<ShippingMethod>(s.union([s.string()]));
