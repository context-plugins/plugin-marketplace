import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeTopicsDetectionJobRequest = {
  /** The identifier assigned by the user to the detection job. */
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTopicsDetectionJobRequestSchema: Schema<DescribeTopicsDetectionJobRequest> =
  s.object<DescribeTopicsDetectionJobRequest>(
    {
      jobId: s.string(),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
