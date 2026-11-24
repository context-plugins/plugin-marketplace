import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Duration statistics */
export type DurationMetrics1 = {
  /** Minimum duration in seconds */
  min?: number;
  /** Mean duration in seconds */
  mean?: number;
  /** Median duration in seconds */
  median?: number;
  /** 95th percentile duration */
  p95?: number;
  /** Maximum duration in seconds */
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const durationMetrics1Schema: Schema<DurationMetrics1> = s.object<DurationMetrics1>(
  {
    min: s.optional(s.int()),
    mean: s.optional(s.int()),
    median: s.optional(s.int()),
    p95: s.optional(s.int()),
    max: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
