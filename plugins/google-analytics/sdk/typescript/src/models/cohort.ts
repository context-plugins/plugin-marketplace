import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateRange2Schema, type DateRange2 } from "./date-range2.js";

/**
 * Defines a cohort selection criteria. A cohort is a group of users who share a common
 * characteristic. For example, users with the same `firstSessionDate` belong to the same cohort.
 */
export type Cohort = {
  /**
   * Assigns a name to this cohort. The dimension `cohort` is valued to this name in a report
   * response. If set, cannot begin with `cohort_` or `RESERVED_`. If not set, cohorts are named by
   * their zero based index `cohort_0`, `cohort_1`, etc.
   */
  name?: string;
  /** Dimension used by the cohort. Required and only supports `firstSessionDate`. */
  dimension?: string;
  /**
   * The cohort selects users whose first touch date is between start date and end date defined in
   * the `dateRange`. This `dateRange` does not specify the full date range of event data that is
   * present in a cohort report. In a cohort report, this `dateRange` is extended by the granularity
   * and offset present in the `cohortsRange`; event data for the extended reporting date range is
   * present in a cohort report. In a cohort request, this `dateRange` is required and the
   * `dateRanges` in the `RunReportRequest` or `RunPivotReportRequest` must be unspecified. This
   * `dateRange` should generally be aligned with the cohort's granularity. If `CohortsRange` uses
   * daily granularity, this `dateRange` can be a single day. If `CohortsRange` uses weekly
   * granularity, this `dateRange` can be aligned to a week boundary, starting at Sunday and ending
   * Saturday. If `CohortsRange` uses monthly granularity, this `dateRange` can be aligned to a
   * month, starting at the first and ending on the last day of the month.
   */
  dateRange?: DateRange2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cohortSchema: Schema<Cohort> = s.object<Cohort>(
  {
    name: s.optional(s.string()),
    dimension: s.optional(s.string()),
    dateRange: s.optional(s.lazy(() => dateRange2Schema)),
  },
  { additionalProperties: s.json() },
);
