import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The shipping address this item is delivered to. Must be `base-shipping-address` for the address
 * derived from the transaction, or the `id` of an `additional_shipping_addresses` entry. Must not
 * be provided when `additional_shipping_addresses` is empty.
 */
export type ShippingAddressId = string;

export const shippingAddressIdSchema: Schema<ShippingAddressId> = s.of<ShippingAddressId>(
  s.union([s.string()]),
);
