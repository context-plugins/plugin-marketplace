import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  topicsDetectionJobPropertiesSchema,
  type TopicsDetectionJobProperties,
} from "./topics-detection-job-properties.js";

export type ListTopicsDetectionJobsResponse = {
  /** A list containing the properties of each job that is returned. */
  topicsDetectionJobPropertiesList?: TopicsDetectionJobProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTopicsDetectionJobsResponseSchema: Schema<ListTopicsDetectionJobsResponse> =
  s.object<ListTopicsDetectionJobsResponse>(
    {
      topicsDetectionJobPropertiesList: s.optional(s.array(s.lazy(() => topicsDetectionJobPropertiesSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        topicsDetectionJobPropertiesList: "TopicsDetectionJobPropertiesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
