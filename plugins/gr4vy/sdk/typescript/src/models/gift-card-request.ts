import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The number and pin for a gift card to fetch a balance for. */
export type GiftCardRequest = {
  /** The 16-19 digit number for the gift card. */
  number: string;
  /** The PIN for this gift card. */
  pin: string;
};

export const giftCardRequestSchema: Schema<GiftCardRequest> = s.object<GiftCardRequest>({
  number: s.string(),
  pin: s.string(),
});
