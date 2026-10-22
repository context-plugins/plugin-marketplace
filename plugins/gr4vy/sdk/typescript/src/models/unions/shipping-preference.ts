import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Controls the shipping address display in the PayPal Checkout flow. Use `GET_FROM_FILE` to use the
 * shipping address from the PayPal account, `NO_SHIPPING` to hide shipping address fields, or
 * `SET_PROVIDED_ADDRESS` to use the shipping address provided in the request.
 */
export type ShippingPreference = string;

export const shippingPreferenceSchema: Schema<ShippingPreference> = s.of<ShippingPreference>(
  s.union([s.string()]),
);
