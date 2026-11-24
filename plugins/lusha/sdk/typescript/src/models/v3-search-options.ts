import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Additional options for search requests */
export type V3SearchOptions = {
  /** Include partial profiles in results */
  includePartialProfiles?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3SearchOptionsSchema: Schema<V3SearchOptions> = s.object<V3SearchOptions>(
  {
    includePartialProfiles: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
