import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StarRating = number;

export const starRatingInternalSchema: Schema<StarRating> = s.of<StarRating>(s.union([s.float64()]));

export const starRatingSchema: Schema<StarRating> = s.lazySchema(() =>
  s.of<StarRating>(s.union([s.float64().check(s.gte(0))])),
);
