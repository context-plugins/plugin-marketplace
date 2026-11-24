import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Loyalty = {
  points?: number;
  redeemedPoints?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loyaltySchema: Schema<Loyalty> = s.object<Loyalty>(
  {
    points: s.optional(s.int()),
    redeemedPoints: s.optional(s.int()),
    _keysMap: {
      redeemedPoints: "redeemed_points",
    },
  },
  { additionalProperties: s.json() },
);
