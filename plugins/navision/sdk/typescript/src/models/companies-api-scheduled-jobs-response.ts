import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scheduledJobSchema, type ScheduledJob } from "./scheduled-job.js";

export type CompaniesApiScheduledJobsResponse = {
  value?: ScheduledJob[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiScheduledJobsResponseSchema: Schema<CompaniesApiScheduledJobsResponse> =
  s.object<CompaniesApiScheduledJobsResponse>(
    {
      value: s.optional(s.array(s.lazy(() => scheduledJobSchema))),
    },
    { additionalProperties: s.json() },
  );
