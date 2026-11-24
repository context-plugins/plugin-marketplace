import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobsSummary2Schema, type JobsSummary2 } from "./jobs-summary2.js";

/** Summary of a Spark Application jobs. */
export type SummarizeSparkApplicationJobsResponse = {
  /** Summary of a Spark Application Jobs */
  jobsSummary?: JobsSummary2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarizeSparkApplicationJobsResponseSchema: Schema<SummarizeSparkApplicationJobsResponse> =
  s.object<SummarizeSparkApplicationJobsResponse>(
    {
      jobsSummary: s.optional(s.lazy(() => jobsSummary2Schema)),
    },
    { additionalProperties: s.json() },
  );
