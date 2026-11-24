import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entitiesDetectionJobPropertiesSchema,
  type EntitiesDetectionJobProperties,
} from "./entities-detection-job-properties.js";

export type ListEntitiesDetectionJobsResponse = {
  /** A list containing the properties of each job that is returned. */
  entitiesDetectionJobPropertiesList?: EntitiesDetectionJobProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listEntitiesDetectionJobsResponseSchema: Schema<ListEntitiesDetectionJobsResponse> =
  s.object<ListEntitiesDetectionJobsResponse>(
    {
      entitiesDetectionJobPropertiesList: s.optional(
        s.array(s.lazy(() => entitiesDetectionJobPropertiesSchema)),
      ),
      nextToken: s.optional(s.string()),
      _keysMap: {
        entitiesDetectionJobPropertiesList: "EntitiesDetectionJobPropertiesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
