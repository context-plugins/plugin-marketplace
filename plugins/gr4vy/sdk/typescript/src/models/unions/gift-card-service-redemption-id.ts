import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The gift card service's unique ID for the redemption. */
export type GiftCardServiceRedemptionId = string;

export const giftCardServiceRedemptionIdSchema: Schema<GiftCardServiceRedemptionId> =
  s.of<GiftCardServiceRedemptionId>(s.union([s.string()]));
