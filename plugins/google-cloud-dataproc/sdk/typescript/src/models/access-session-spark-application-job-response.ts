import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobData1Schema, type JobData1 } from "./job-data1.js";

/** Details of a particular job associated with Spark Application */
export type AccessSessionSparkApplicationJobResponse = {
  /** Output only. Data corresponding to a spark job. */
  jobData?: JobData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessSessionSparkApplicationJobResponseSchema: Schema<AccessSessionSparkApplicationJobResponse> =
  s.object<AccessSessionSparkApplicationJobResponse>(
    {
      jobData: s.optional(s.lazy(() => jobData1Schema)),
    },
    { additionalProperties: s.json() },
  );
