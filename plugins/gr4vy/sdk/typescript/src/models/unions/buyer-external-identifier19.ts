import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The `external_identifier` of the buyer to associate this payment method to. If this field is
 * provided then the `buyer_id` field needs to be unset. If a stored payment method or gift card is
 * provided, then the buyer for that payment method needs to match the buyer for this field.
 */
export type BuyerExternalIdentifier19 = string;

export const buyerExternalIdentifier19Schema: Schema<BuyerExternalIdentifier19> =
  s.of<BuyerExternalIdentifier19>(s.union([s.string()]));
