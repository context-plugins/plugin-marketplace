import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { jobsResponseSchema, type JobsResponse } from "../jobs-response.js";
import { jobsResponse1Schema, type JobsResponse1 } from "../jobs-response1.js";
import { jobsResponse2Schema, type JobsResponse2 } from "../jobs-response2.js";

export type JobsResponse3 = JobsResponse | JobsResponse1 | JobsResponse2;

export const jobsResponse3Schema: Schema<JobsResponse3> = s.of<JobsResponse3>(
  s.union([
    s.lazy(() => jobsResponseSchema),
    s.lazy(() => jobsResponse1Schema),
    s.lazy(() => jobsResponse2Schema),
  ]),
);
