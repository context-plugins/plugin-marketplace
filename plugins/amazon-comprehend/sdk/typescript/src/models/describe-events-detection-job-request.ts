import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeEventsDetectionJobRequest = {
  /** The identifier of the events detection job. */
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeEventsDetectionJobRequestSchema: Schema<DescribeEventsDetectionJobRequest> =
  s.object<DescribeEventsDetectionJobRequest>(
    {
      jobId: s.string(),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
