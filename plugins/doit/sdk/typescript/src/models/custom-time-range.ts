import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Custom date range for the secondary time range. */
export type CustomTimeRange = {
  /** Start date. */
  from?: Date;
  /** End date. */
  to?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customTimeRangeSchema: Schema<CustomTimeRange> = s.object<CustomTimeRange>(
  {
    from: s.optional(s.dateTime()),
    to: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
