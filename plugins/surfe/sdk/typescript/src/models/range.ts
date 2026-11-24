import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Range = {
  from?: number;
  to?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rangeSchema: Schema<Range> = s.object<Range>(
  {
    from: s.optional(s.int()),
    to: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
