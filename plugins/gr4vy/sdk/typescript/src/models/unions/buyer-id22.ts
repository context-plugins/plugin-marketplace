import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The ID of the buyer to associate this payment method to. If this field is provided then the
 * `buyer_external_identifier` field needs to be unset. If a stored payment method or gift card is
 * provided, then the buyer for that payment method needs to match the buyer for this field.
 */
export type BuyerId22 = string;

export const buyerId22Schema: Schema<BuyerId22> = s.of<BuyerId22>(s.union([s.string()]));
