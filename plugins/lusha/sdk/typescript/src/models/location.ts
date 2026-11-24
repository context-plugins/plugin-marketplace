import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Location = {
  country?: string;
  state?: string;
  city?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationSchema: Schema<Location> = s.object<Location>(
  {
    country: s.optional(s.string()),
    state: s.optional(s.string()),
    city: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
