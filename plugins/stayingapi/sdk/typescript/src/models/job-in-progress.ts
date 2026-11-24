import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataStayingJobsApiSchema, type DataStayingJobsApi } from "./data-staying-jobs-api.js";
import { meta2Schema, type Meta2 } from "./meta2.js";

/** pending | running — carries a Retry-After header; poll again after the back-off. */
export type JobInProgress = {
  data: DataStayingJobsApi;
  meta: Meta2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobInProgressSchema: Schema<JobInProgress> = s.object<JobInProgress>(
  {
    data: dataStayingJobsApiSchema,
    meta: meta2Schema,
  },
  { additionalProperties: s.json() },
);
