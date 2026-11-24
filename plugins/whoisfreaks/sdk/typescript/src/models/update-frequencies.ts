import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateRangeStatusSchema, type DateRangeStatus } from "./date-range-status.js";

export type UpdateFrequencies = {
  daily?: DateRangeStatus;
  weekly?: DateRangeStatus;
  monthly?: DateRangeStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateFrequenciesSchema: Schema<UpdateFrequencies> = s.object<UpdateFrequencies>(
  {
    daily: s.optional(s.lazy(() => dateRangeStatusSchema)),
    weekly: s.optional(s.lazy(() => dateRangeStatusSchema)),
    monthly: s.optional(s.lazy(() => dateRangeStatusSchema)),
  },
  { additionalProperties: s.json() },
);
