import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeEntitiesDetectionJobRequest = {
  /**
   * The identifier that Amazon Comprehend generated for the job. The StartEntitiesDetectionJob
   * operation returns this identifier in its response.
   */
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeEntitiesDetectionJobRequestSchema: Schema<DescribeEntitiesDetectionJobRequest> =
  s.object<DescribeEntitiesDetectionJobRequest>(
    {
      jobId: s.string(),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
