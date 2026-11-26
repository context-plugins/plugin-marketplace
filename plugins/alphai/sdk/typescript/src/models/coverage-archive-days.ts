import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CoverageArchiveDays = {
  /** Days; 0 means unlimited. */
  free: number;
  basic: number;
  pro: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coverageArchiveDaysSchema: Schema<CoverageArchiveDays> = s.object<CoverageArchiveDays>(
  {
    free: s.int(),
    basic: s.int(),
    pro: s.int(),
  },
  { additionalProperties: s.json() },
);
