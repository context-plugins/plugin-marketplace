import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cohortReportSettings2Schema, type CohortReportSettings2 } from "./cohort-report-settings2.js";
import { cohortSchema, type Cohort } from "./cohort.js";
import { cohortsRange2Schema, type CohortsRange2 } from "./cohorts-range2.js";

/**
 * The specification of cohorts for a cohort report. Cohort reports create a time series of user
 * retention for the cohort. For example, you could select the cohort of users that were acquired in
 * the first week of September and follow that cohort for the next six weeks. Selecting the users
 * acquired in the first week of September cohort is specified in the `cohort` object. Following
 * that cohort for the next six weeks is specified in the `cohortsRange` object. For examples, see
 * [Cohort Report
 * Examples](https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples).
 * The report response could show a weekly time series where say your app has retained 60% of this
 * cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be
 * calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the
 * report.
 */
export type CohortSpec = {
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

export const cohortSpecSchema: Schema<CohortSpec> = s.object<CohortSpec>(
  {
    cohortsRange: s.optional(s.lazy(() => cohortsRange2Schema)),
    cohortReportSettings: s.optional(s.lazy(() => cohortReportSettings2Schema)),
    cohorts: s.optional(s.array(s.lazy(() => cohortSchema))),
  },
  { additionalProperties: s.json() },
);
