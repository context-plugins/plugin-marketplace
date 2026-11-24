import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional settings for a cohort report. */
export type CohortReportSettings2 = {
  /**
   * If true, accumulates the result from first touch day to the end day. Not supported in
   * `RunReportRequest`.
   */
  accumulate?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cohortReportSettings2Schema: Schema<CohortReportSettings2> = s.object<CohortReportSettings2>(
  {
    accumulate: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
