import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const JobView1 = {
  JobViewUnspecified: "JOB_VIEW_UNSPECIFIED",
  JobViewIdOnly: "JOB_VIEW_ID_ONLY",
  JobViewMinimal: "JOB_VIEW_MINIMAL",
  JobViewSmall: "JOB_VIEW_SMALL",
  JobViewFull: "JOB_VIEW_FULL",
} as const;
export type JobView1 = (typeof JobView1)[keyof typeof JobView1] | (string & {});

export const jobView1Schema: EnumSchema<JobView1> = s.enumOf<JobView1>(JobView1);
