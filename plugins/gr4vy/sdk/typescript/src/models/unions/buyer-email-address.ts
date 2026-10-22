import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Deprecated. Filters the results to only the items for which the `buyer` has an `email_address`
 * that matches this value. This filter can be slow and is not recommended for use in automated
 * systems. Use `buyer_search`, `buyer_external_identifier` or `buyer_id` instead.
 */
export type BuyerEmailAddress = string;

export const buyerEmailAddressSchema: Schema<BuyerEmailAddress> = s.of<BuyerEmailAddress>(
  s.union([s.string()]),
);
