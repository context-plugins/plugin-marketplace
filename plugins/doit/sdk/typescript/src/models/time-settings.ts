import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mode2Schema, type Mode2 } from "./mode2.js";
import { unitSchema, type Unit } from "./unit.js";

/**
 * Specify a predefined or custom time range for the report. For example, to specify a custom time
 * range of "last 2 days", set the mode to `last`, the amount to `2`, and the unit to `day`. If
 * `includeCurrent` is `true`, the range will be yesterday and today; otherwise, the range will be
 * yesterday and the day before yesterday. If "custom" type is specified, you need to provide a
 * custom time range in the `customTimeRange` field.
 */
export type TimeSettings = {
  /** Number of time units to include in the time range. */
  amount?: number;
  /** Whether to include the current time period. */
  includeCurrent?: boolean;
  /** Time range mode (last N periods, current period, or custom). */
  mode?: Mode2;
  /** Time unit for the time range. */
  unit?: Unit;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const timeSettingsProperties: s.Shape<TimeSettings> = {
  amount: s.optional(s.int()),
  includeCurrent: s.optional(s.boolean()),
  mode: s.optional(s.lazy(() => mode2Schema)),
  unit: s.optional(s.lazy(() => unitSchema)),
};

export const timeSettingsInternalSchema: Schema<TimeSettings> = s.object<TimeSettings>(
  timeSettingsProperties,
  { additionalProperties: s.json() },
);

export const timeSettingsSchema: Schema<TimeSettings> = s.lazySchema(() =>
  s.object<TimeSettings>(
    {
      ...timeSettingsProperties,
      amount: s.optional(s.int().check(s.gte(0), s.lte(5000))),
    },
    { additionalProperties: s.json() },
  ),
);
