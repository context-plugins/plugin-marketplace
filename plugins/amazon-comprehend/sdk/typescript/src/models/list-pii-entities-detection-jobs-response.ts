import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  piiEntitiesDetectionJobPropertiesSchema,
  type PiiEntitiesDetectionJobProperties,
} from "./pii-entities-detection-job-properties.js";

export type ListPiiEntitiesDetectionJobsResponse = {
  /** A list containing the properties of each job that is returned. */
  piiEntitiesDetectionJobPropertiesList?: PiiEntitiesDetectionJobProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listPiiEntitiesDetectionJobsResponseSchema: Schema<ListPiiEntitiesDetectionJobsResponse> =
  s.object<ListPiiEntitiesDetectionJobsResponse>(
    {
      piiEntitiesDetectionJobPropertiesList: s.optional(
        s.array(s.lazy(() => piiEntitiesDetectionJobPropertiesSchema)),
      ),
      nextToken: s.optional(s.string()),
      _keysMap: {
        piiEntitiesDetectionJobPropertiesList: "PiiEntitiesDetectionJobPropertiesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
