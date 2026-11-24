import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item2 = {
  headingId?: string;
  name?: string;
  year?: string | null;
  url?: string;
  gradedTotal?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item2Schema: Schema<Item2> = s.object<Item2>(
  {
    headingId: s.optional(s.string()),
    name: s.optional(s.string()),
    year: s.optionalNullable(s.string()),
    url: s.optional(s.string()),
    gradedTotal: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
