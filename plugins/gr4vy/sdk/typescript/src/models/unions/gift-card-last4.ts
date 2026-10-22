import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Deprecated. Filters for transactions that have at least one gift card redemption where the last 4
 * digits of its gift card number matches exactly with the provided value. This filter can be slow
 * and is not recommended for use in automated systems. Use `gift_card_id` instead.
 */
export type GiftCardLast4 = string;

export const giftCardLast4Schema: Schema<GiftCardLast4> = s.of<GiftCardLast4>(s.union([s.string()]));
