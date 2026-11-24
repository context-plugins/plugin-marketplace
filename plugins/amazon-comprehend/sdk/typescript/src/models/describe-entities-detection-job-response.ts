import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entitiesDetectionJobPropertiesSchema,
  type EntitiesDetectionJobProperties,
} from "./entities-detection-job-properties.js";

export type DescribeEntitiesDetectionJobResponse = {
  entitiesDetectionJobProperties?: EntitiesDetectionJobProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeEntitiesDetectionJobResponseSchema: Schema<DescribeEntitiesDetectionJobResponse> =
  s.object<DescribeEntitiesDetectionJobResponse>(
    {
      entitiesDetectionJobProperties: s.optional(s.lazy(() => entitiesDetectionJobPropertiesSchema)),
      _keysMap: {
        entitiesDetectionJobProperties: "EntitiesDetectionJobProperties",
      },
    },
    { additionalProperties: s.json() },
  );
