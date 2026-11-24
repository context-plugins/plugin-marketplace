import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required when the time range is set to "custom". On PATCH, omit to preserve the existing range;
 * send null to remove it. A PATCH that sets `timeRange` to a mode other than "custom" without
 * sending `customTimeRange` removes it. Sending null while `timeRange.mode` stays "custom" is
 * rejected.
 */
export type CustomTimeRange1 = {
  /** The start timestamp of the time range in RFC3339 format. */
  from?: Date;
  /** The end timestamp of the time range in RFC3339 format. */
  to?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customTimeRange1Schema: Schema<CustomTimeRange1> = s.object<CustomTimeRange1>(
  {
    from: s.optional(s.dateTime()),
    to: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
