import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Test counts by result */
export type TestCounts = {
  /** Number of errored tests */
  error?: number;
  /** Number of failed tests */
  failure?: number;
  /** Number of successful tests */
  success?: number;
  /** Number of skipped tests */
  skipped?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testCountsSchema: Schema<TestCounts> = s.object<TestCounts>(
  {
    error: s.optional(s.int()),
    failure: s.optional(s.int()),
    success: s.optional(s.int()),
    skipped: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
