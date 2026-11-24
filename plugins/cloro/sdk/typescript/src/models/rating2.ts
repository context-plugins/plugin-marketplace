import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Aggregate star rating — present for local businesses */
export type Rating2 = {
  /** Star rating value */
  rating?: string;
  /** Number of reviews */
  count?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rating2Schema: Schema<Rating2> = s.object<Rating2>(
  {
    rating: s.optional(s.string()),
    count: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
