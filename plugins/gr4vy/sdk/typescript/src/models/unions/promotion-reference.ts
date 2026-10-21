import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The `promotionReference` field passed to the purchase API. */
export type PromotionReference = string;

export const promotionReferenceSchema: Schema<PromotionReference> = s.of<PromotionReference>(
  s.union([s.string()]),
);
