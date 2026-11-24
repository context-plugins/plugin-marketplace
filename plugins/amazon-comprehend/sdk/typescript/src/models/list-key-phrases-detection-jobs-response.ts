import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  keyPhrasesDetectionJobPropertiesSchema,
  type KeyPhrasesDetectionJobProperties,
} from "./key-phrases-detection-job-properties.js";

export type ListKeyPhrasesDetectionJobsResponse = {
  /** A list containing the properties of each job that is returned. */
  keyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listKeyPhrasesDetectionJobsResponseSchema: Schema<ListKeyPhrasesDetectionJobsResponse> =
  s.object<ListKeyPhrasesDetectionJobsResponse>(
    {
      keyPhrasesDetectionJobPropertiesList: s.optional(
        s.array(s.lazy(() => keyPhrasesDetectionJobPropertiesSchema)),
      ),
      nextToken: s.optional(s.string()),
      _keysMap: {
        keyPhrasesDetectionJobPropertiesList: "KeyPhrasesDetectionJobPropertiesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
