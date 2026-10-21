import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for transactions where a gift card used has an `id` that matches the provided value. */
export type GiftCardId = string;

export const giftCardIdSchema: Schema<GiftCardId> = s.of<GiftCardId>(s.union([s.string()]));
