import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Profile1 = {
  category?: string;
  subcategory?: string;
  addresses?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profile1Schema: Schema<Profile1> = s.object<Profile1>(
  {
    category: s.optional(s.string()),
    subcategory: s.optional(s.string()),
    addresses: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
