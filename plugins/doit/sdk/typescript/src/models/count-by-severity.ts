import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Count of matching anomalies per severity level. All three keys are always present, with zero
 * counts included.
 */
export type CountBySeverity = {
  information: number;
  warning: number;
  critical: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countBySeveritySchema: Schema<CountBySeverity> = s.object<CountBySeverity>(
  {
    information: s.int(),
    warning: s.int(),
    critical: s.int(),
  },
  { additionalProperties: s.json() },
);
