import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  targetedSentimentDetectionJobPropertiesSchema,
  type TargetedSentimentDetectionJobProperties,
} from "./targeted-sentiment-detection-job-properties.js";

export type ListTargetedSentimentDetectionJobsResponse = {
  /** A list containing the properties of each job that is returned. */
  targetedSentimentDetectionJobPropertiesList?: TargetedSentimentDetectionJobProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTargetedSentimentDetectionJobsResponseSchema: Schema<ListTargetedSentimentDetectionJobsResponse> =
  s.object<ListTargetedSentimentDetectionJobsResponse>(
    {
      targetedSentimentDetectionJobPropertiesList: s.optional(
        s.array(s.lazy(() => targetedSentimentDetectionJobPropertiesSchema)),
      ),
      nextToken: s.optional(s.string()),
      _keysMap: {
        targetedSentimentDetectionJobPropertiesList: "TargetedSentimentDetectionJobPropertiesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
