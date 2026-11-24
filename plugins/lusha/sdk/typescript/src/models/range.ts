import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { coverageSchema, type Coverage } from "./coverage.js";

export type Range = {
  coverage?: Coverage;
  min?: number;
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rangeSchema: Schema<Range> = s.object<Range>(
  {
    coverage: s.optional(s.lazy(() => coverageSchema)),
    min: s.optional(s.int()),
    max: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
