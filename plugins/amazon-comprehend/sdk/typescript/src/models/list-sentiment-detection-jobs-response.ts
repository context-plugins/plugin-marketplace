import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sentimentDetectionJobPropertiesSchema,
  type SentimentDetectionJobProperties,
} from "./sentiment-detection-job-properties.js";

export type ListSentimentDetectionJobsResponse = {
  /** A list containing the properties of each job that is returned. */
  sentimentDetectionJobPropertiesList?: SentimentDetectionJobProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSentimentDetectionJobsResponseSchema: Schema<ListSentimentDetectionJobsResponse> =
  s.object<ListSentimentDetectionJobsResponse>(
    {
      sentimentDetectionJobPropertiesList: s.optional(
        s.array(s.lazy(() => sentimentDetectionJobPropertiesSchema)),
      ),
      nextToken: s.optional(s.string()),
      _keysMap: {
        sentimentDetectionJobPropertiesList: "SentimentDetectionJobPropertiesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
