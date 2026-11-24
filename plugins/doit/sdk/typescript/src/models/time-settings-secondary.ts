import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customTimeRangeSchema, type CustomTimeRange } from "./custom-time-range.js";
import { unit1Schema, type Unit1 } from "./unit1.js";

/** Secondary time range for comparative reports. */
export type TimeSettingsSecondary = {
  /** Number of periods to shift back. */
  amount?: number;
  /**
   * Whether to align to complete previous periods (full year/quarter/month) vs shifting dates by
   * amount. When `true`, selects complete periods (e.g., full previous year Jan 1-Dec 31, not up to
   * today). When `false`, shifts dates by amount, which may result in partial periods extending to
   * today.
   */
  includeCurrent?: boolean;
  /** Time interval unit for shifting. */
  unit?: Unit1;
  /** Custom date range for the secondary time range. */
  customTimeRange?: CustomTimeRange;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeSettingsSecondarySchema: Schema<TimeSettingsSecondary> = s.object<TimeSettingsSecondary>(
  {
    amount: s.optional(s.int()),
    includeCurrent: s.optional(s.boolean()),
    unit: s.optional(s.lazy(() => unit1Schema)),
    customTimeRange: s.optional(s.lazy(() => customTimeRangeSchema)),
  },
  { additionalProperties: s.json() },
);
