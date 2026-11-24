import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Present only when the request sent return_usage: true. characters is the billable character count
 * the request submitted; see the return_usage request field for the exact semantics.
 */
export type Usage = {
  characters?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageSchema: Schema<Usage> = s.object<Usage>(
  {
    characters: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
