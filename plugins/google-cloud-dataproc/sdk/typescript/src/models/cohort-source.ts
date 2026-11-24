import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. Source of the cohort. */
export const CohortSource = {
  CohortSourceUnspecified: "COHORT_SOURCE_UNSPECIFIED",
  UserProvided: "USER_PROVIDED",
  Airflow: "AIRFLOW",
} as const;
export type CohortSource = (typeof CohortSource)[keyof typeof CohortSource] | (string & {});

export const cohortSourceSchema: EnumSchema<CohortSource> = s.enumOf<CohortSource>(CohortSource);
