import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for transactions with gift card redemptions. */
export type HasGiftCardRedemptions = boolean;

export const hasGiftCardRedemptionsSchema: Schema<HasGiftCardRedemptions> = s.of<HasGiftCardRedemptions>(
  s.union([s.boolean()]),
);
