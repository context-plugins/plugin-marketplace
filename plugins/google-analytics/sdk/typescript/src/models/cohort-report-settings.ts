import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional settings of a cohort report. */
export type CohortReportSettings = {
  /**
   * If true, accumulates the result from first touch day to the end day. Not supported in
   * `RunReportRequest`.
   */
  accumulate?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cohortReportSettingsSchema: Schema<CohortReportSettings> = s.object<CohortReportSettings>(
  {
    accumulate: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
