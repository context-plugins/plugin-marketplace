import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Placement source for ranked feed results. ORGANIC means the card was emitted by normal feed
 * ranking. PROMO means the card was inserted by the homepage cards promo framework. PINNED means
 * the card was moved to the head of the ranked stack (e.g. knowledge-gap pilot cards).
 */
export const PlacementReason = {
  Organic: "ORGANIC",
  Promo: "PROMO",
  Pinned: "PINNED",
} as const;
export type PlacementReason = (typeof PlacementReason)[keyof typeof PlacementReason] | (string & {});

export const placementReasonSchema: EnumSchema<PlacementReason> = s.enumOf<PlacementReason>(PlacementReason);
