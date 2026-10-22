import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Total shipping amount. */
export type ShippingAmount1 = number;

export const shippingAmount1Schema: Schema<ShippingAmount1> = s.of<ShippingAmount1>(s.union([s.int()]));
