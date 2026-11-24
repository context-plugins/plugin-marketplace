import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ReportGroupTrendStats = {
  /** Contains the average of all values analyzed. */
  average?: string;
  /** Contains the maximum value analyzed. */
  max?: string;
  /** Contains the minimum value analyzed. */
  min?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportGroupTrendStatsSchema: Schema<ReportGroupTrendStats> = s.object<ReportGroupTrendStats>(
  {
    average: s.optional(s.string()),
    max: s.optional(s.string()),
    min: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
