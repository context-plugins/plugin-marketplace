import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Set = {
  headingId?: string;
  name?: string;
  year?: string | null;
  gradedTotal?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const setSchema: Schema<Set> = s.object<Set>(
  {
    headingId: s.optional(s.string()),
    name: s.optional(s.string()),
    year: s.optionalNullable(s.string()),
    gradedTotal: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
