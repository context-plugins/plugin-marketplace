import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the gift card redemption for the `payment_method`. */
export const GiftCardRedemptionStatus2 = {
  Created: "created",
  Succeeded: "succeeded",
  Failed: "failed",
  Skipped: "skipped",
} as const;
export type GiftCardRedemptionStatus2 =
  | (typeof GiftCardRedemptionStatus2)[keyof typeof GiftCardRedemptionStatus2]
  | (string & {});

export const giftCardRedemptionStatus2Schema: EnumSchema<GiftCardRedemptionStatus2> =
  s.enumOf<GiftCardRedemptionStatus2>(GiftCardRedemptionStatus2);
