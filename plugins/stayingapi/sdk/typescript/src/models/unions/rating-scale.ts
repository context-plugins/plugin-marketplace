import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RatingScale = number;

export const ratingScaleInternalSchema: Schema<RatingScale> = s.of<RatingScale>(s.union([s.float64()]));

export const ratingScaleSchema: Schema<RatingScale> = s.lazySchema(() =>
  s.of<RatingScale>(s.union([s.float64().check(s.gte(0))])),
);
