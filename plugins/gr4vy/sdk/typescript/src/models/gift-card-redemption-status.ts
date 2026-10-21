import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardRedemptionStatus = {
  Created: "created",
  Succeeded: "succeeded",
  Failed: "failed",
  Skipped: "skipped",
} as const;
export type GiftCardRedemptionStatus =
  | (typeof GiftCardRedemptionStatus)[keyof typeof GiftCardRedemptionStatus]
  | (string & {});

export const giftCardRedemptionStatusSchema: EnumSchema<GiftCardRedemptionStatus> =
  s.enumOf<GiftCardRedemptionStatus>(GiftCardRedemptionStatus);
