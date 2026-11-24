import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobsSummary2Schema, type JobsSummary2 } from "./jobs-summary2.js";

/** Summary of a Spark Application jobs. */
export type SummarizeSessionSparkApplicationJobsResponse = {
  /** Summary of a Spark Application Jobs */
  jobsSummary?: JobsSummary2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarizeSessionSparkApplicationJobsResponseSchema: Schema<SummarizeSessionSparkApplicationJobsResponse> =
  s.object<SummarizeSessionSparkApplicationJobsResponse>(
    {
      jobsSummary: s.optional(s.lazy(() => jobsSummary2Schema)),
    },
    { additionalProperties: s.json() },
  );
