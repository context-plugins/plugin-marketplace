import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  topicsDetectionJobPropertiesSchema,
  type TopicsDetectionJobProperties,
} from "./topics-detection-job-properties.js";

export type DescribeTopicsDetectionJobResponse = {
  topicsDetectionJobProperties?: TopicsDetectionJobProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTopicsDetectionJobResponseSchema: Schema<DescribeTopicsDetectionJobResponse> =
  s.object<DescribeTopicsDetectionJobResponse>(
    {
      topicsDetectionJobProperties: s.optional(s.lazy(() => topicsDetectionJobPropertiesSchema)),
      _keysMap: {
        topicsDetectionJobProperties: "TopicsDetectionJobProperties",
      },
    },
    { additionalProperties: s.json() },
  );
