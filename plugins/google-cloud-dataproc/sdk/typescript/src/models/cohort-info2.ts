import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cohortSourceSchema, type CohortSource } from "./cohort-source.js";

/** Output only. Information about the cohort that the workload belongs to. */
export type CohortInfo2 = {
  /** Output only. Source of the cohort. */
  cohortSource?: CohortSource;
  /** Output only. Final cohort that was used to tune the workload. */
  cohort?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cohortInfo2Schema: Schema<CohortInfo2> = s.object<CohortInfo2>(
  {
    cohortSource: s.optional(s.lazy(() => cohortSourceSchema)),
    cohort: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
