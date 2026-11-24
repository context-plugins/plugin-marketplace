import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dominantLanguageDetectionJobPropertiesSchema,
  type DominantLanguageDetectionJobProperties,
} from "./dominant-language-detection-job-properties.js";

export type ListDominantLanguageDetectionJobsResponse = {
  /** A list containing the properties of each job that is returned. */
  dominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDominantLanguageDetectionJobsResponseSchema: Schema<ListDominantLanguageDetectionJobsResponse> =
  s.object<ListDominantLanguageDetectionJobsResponse>(
    {
      dominantLanguageDetectionJobPropertiesList: s.optional(
        s.array(s.lazy(() => dominantLanguageDetectionJobPropertiesSchema)),
      ),
      nextToken: s.optional(s.string()),
      _keysMap: {
        dominantLanguageDetectionJobPropertiesList: "DominantLanguageDetectionJobPropertiesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
