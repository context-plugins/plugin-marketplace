import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Duration statistics */
export type DurationMetrics = {
  /** Minimum duration */
  min?: number;
  /** Mean duration */
  mean?: number;
  /** Median duration */
  median?: number;
  /** 95th percentile duration */
  p95?: number;
  /** Maximum duration */
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const durationMetricsSchema: Schema<DurationMetrics> = s.object<DurationMetrics>(
  {
    min: s.optional(s.int()),
    mean: s.optional(s.int()),
    median: s.optional(s.int()),
    p95: s.optional(s.int()),
    max: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
