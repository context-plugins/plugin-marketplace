import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Recent = {
  maxAgeS?: number;
  factor?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recentSchema: Schema<Recent> = s.object<Recent>(
  {
    maxAgeS: s.optional(s.float64()),
    factor: s.optional(s.float64()),
    _keysMap: {
      maxAgeS: "max_age_s",
    },
  },
  { additionalProperties: s.json() },
);
