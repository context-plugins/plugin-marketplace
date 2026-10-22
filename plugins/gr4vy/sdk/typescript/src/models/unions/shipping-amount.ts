import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Freight/shipping amount represented as a monetary amount in the smallest currency unit for the
 * given currency, for example `1299` cents to create an authorization for `$12.99`
 */
export type ShippingAmount = number;

export const shippingAmountSchema: Schema<ShippingAmount> = s.of<ShippingAmount>(s.union([s.int()]));
