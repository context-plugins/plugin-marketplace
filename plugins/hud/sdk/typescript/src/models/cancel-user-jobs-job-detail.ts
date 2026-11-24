import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelUserJobsJobDetail = {
  jobId: string;
  cancelled: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelUserJobsJobDetailSchema: Schema<CancelUserJobsJobDetail> =
  s.object<CancelUserJobsJobDetail>(
    {
      jobId: s.string(),
      cancelled: s.int(),
      _keysMap: {
        jobId: "job_id",
      },
    },
    { additionalProperties: s.json() },
  );
