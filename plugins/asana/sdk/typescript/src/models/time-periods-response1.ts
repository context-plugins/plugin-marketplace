import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timePeriodCompactSchema, type TimePeriodCompact } from "./time-period-compact.js";

export type TimePeriodsResponse1 = {
  data?: TimePeriodCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timePeriodsResponse1Schema: Schema<TimePeriodsResponse1> = s.object<TimePeriodsResponse1>(
  {
    data: s.optional(s.array(s.lazy(() => timePeriodCompactSchema))),
  },
  { additionalProperties: s.json() },
);
