import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  piiEntitiesDetectionJobPropertiesSchema,
  type PiiEntitiesDetectionJobProperties,
} from "./pii-entities-detection-job-properties.js";

export type DescribePiiEntitiesDetectionJobResponse = {
  piiEntitiesDetectionJobProperties?: PiiEntitiesDetectionJobProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describePiiEntitiesDetectionJobResponseSchema: Schema<DescribePiiEntitiesDetectionJobResponse> =
  s.object<DescribePiiEntitiesDetectionJobResponse>(
    {
      piiEntitiesDetectionJobProperties: s.optional(s.lazy(() => piiEntitiesDetectionJobPropertiesSchema)),
      _keysMap: {
        piiEntitiesDetectionJobProperties: "PiiEntitiesDetectionJobProperties",
      },
    },
    { additionalProperties: s.json() },
  );
