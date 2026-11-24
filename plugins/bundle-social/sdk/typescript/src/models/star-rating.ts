import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StarRating = {
  One: "ONE",
  Two: "TWO",
  Three: "THREE",
  Four: "FOUR",
  Five: "FIVE",
} as const;
export type StarRating = (typeof StarRating)[keyof typeof StarRating] | (string & {});

export const starRatingSchema: EnumSchema<StarRating> = s.enumOf<StarRating>(StarRating);
