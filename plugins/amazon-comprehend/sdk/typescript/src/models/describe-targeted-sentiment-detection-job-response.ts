import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  targetedSentimentDetectionJobPropertiesSchema,
  type TargetedSentimentDetectionJobProperties,
} from "./targeted-sentiment-detection-job-properties.js";

export type DescribeTargetedSentimentDetectionJobResponse = {
  targetedSentimentDetectionJobProperties?: TargetedSentimentDetectionJobProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTargetedSentimentDetectionJobResponseSchema: Schema<DescribeTargetedSentimentDetectionJobResponse> =
  s.object<DescribeTargetedSentimentDetectionJobResponse>(
    {
      targetedSentimentDetectionJobProperties: s.optional(
        s.lazy(() => targetedSentimentDetectionJobPropertiesSchema),
      ),
      _keysMap: {
        targetedSentimentDetectionJobProperties: "TargetedSentimentDetectionJobProperties",
      },
    },
    { additionalProperties: s.json() },
  );
