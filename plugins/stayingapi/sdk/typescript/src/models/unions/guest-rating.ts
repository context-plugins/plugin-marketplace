import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type GuestRating = number;

export const guestRatingInternalSchema: Schema<GuestRating> = s.of<GuestRating>(s.union([s.float64()]));

export const guestRatingSchema: Schema<GuestRating> = s.lazySchema(() =>
  s.of<GuestRating>(s.union([s.float64().check(s.gte(0))])),
);
