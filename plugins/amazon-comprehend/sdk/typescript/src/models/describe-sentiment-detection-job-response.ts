import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sentimentDetectionJobPropertiesSchema,
  type SentimentDetectionJobProperties,
} from "./sentiment-detection-job-properties.js";

export type DescribeSentimentDetectionJobResponse = {
  sentimentDetectionJobProperties?: SentimentDetectionJobProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeSentimentDetectionJobResponseSchema: Schema<DescribeSentimentDetectionJobResponse> =
  s.object<DescribeSentimentDetectionJobResponse>(
    {
      sentimentDetectionJobProperties: s.optional(s.lazy(() => sentimentDetectionJobPropertiesSchema)),
      _keysMap: {
        sentimentDetectionJobProperties: "SentimentDetectionJobProperties",
      },
    },
    { additionalProperties: s.json() },
  );
