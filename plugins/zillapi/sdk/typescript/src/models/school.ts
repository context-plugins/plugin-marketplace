import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type School = {
  name?: string;
  /** GreatSchools rating (1–10). */
  rating?: number | null;
  /** Distance in miles. */
  distance?: number | null;
  /** e.g. public, private, charter. */
  type?: string | null;
  /** e.g. Elementary, Middle, High. */
  level?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schoolSchema: Schema<School> = s.object<School>(
  {
    name: s.optional(s.string()),
    rating: s.optionalNullable(s.int()),
    distance: s.optionalNullable(s.float64()),
    type: s.optionalNullable(s.string()),
    level: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
