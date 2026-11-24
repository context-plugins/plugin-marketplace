import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cohortReportSettings2Schema, type CohortReportSettings2 } from "./cohort-report-settings2.js";
import { cohortSchema, type Cohort } from "./cohort.js";
import { cohortsRange2Schema, type CohortsRange2 } from "./cohorts-range2.js";

/**
 * Cohort group associated with this request. If there is a cohort group in the request the 'cohort'
 * dimension must be present.
 */
export type CohortSpec1 = {
  /**
   * Cohort reports follow cohorts over an extended reporting date range. This range specifies an
   * offset duration to follow the cohorts over.
   */
  cohortsRange?: CohortsRange2;
  /** Optional settings for a cohort report. */
  cohortReportSettings?: CohortReportSettings2;
  /**
   * Defines the selection criteria to group users into cohorts. Most cohort reports define only a
   * single cohort. If multiple cohorts are specified, each cohort can be recognized in the report
   * by their name.
   */
  cohorts?: Cohort[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cohortSpec1Schema: Schema<CohortSpec1> = s.object<CohortSpec1>(
  {
    cohortsRange: s.optional(s.lazy(() => cohortsRange2Schema)),
    cohortReportSettings: s.optional(s.lazy(() => cohortReportSettings2Schema)),
    cohorts: s.optional(s.array(s.lazy(() => cohortSchema))),
  },
  { additionalProperties: s.json() },
);
