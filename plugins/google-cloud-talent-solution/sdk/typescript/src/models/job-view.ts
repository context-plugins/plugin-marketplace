import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The desired job attributes returned for jobs in the search response. Defaults to
 * JobView.JOB_VIEW_SMALL if no value is specified.
 */
export const JobView = {
  JobViewUnspecified: "JOB_VIEW_UNSPECIFIED",
  JobViewIdOnly: "JOB_VIEW_ID_ONLY",
  JobViewMinimal: "JOB_VIEW_MINIMAL",
  JobViewSmall: "JOB_VIEW_SMALL",
  JobViewFull: "JOB_VIEW_FULL",
} as const;
export type JobView = (typeof JobView)[keyof typeof JobView] | (string & {});

export const jobViewSchema: EnumSchema<JobView> = s.enumOf<JobView>(JobView);
