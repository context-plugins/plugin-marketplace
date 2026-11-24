import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Ignore metric values within these inclusive bounds for percentage-change alerts. Bounds use the
 * metric units, not percentage-change units, and must satisfy lowerBound <= upperBound. Omission on
 * PATCH preserves the range; null clears it. Changing condition away from percentage-change clears
 * the range; supplying a non-null range with another condition is rejected.
 */
export type AlertIgnoreValuesRange = {
  lowerBound: number;
  upperBound: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const alertIgnoreValuesRangeSchema: Schema<AlertIgnoreValuesRange> = s.object<AlertIgnoreValuesRange>(
  {
    lowerBound: s.float64(),
    upperBound: s.float64(),
  },
  { additionalProperties: s.json() },
);
