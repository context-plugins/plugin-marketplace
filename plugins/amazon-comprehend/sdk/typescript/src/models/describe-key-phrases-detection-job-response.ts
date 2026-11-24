import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  keyPhrasesDetectionJobPropertiesSchema,
  type KeyPhrasesDetectionJobProperties,
} from "./key-phrases-detection-job-properties.js";

export type DescribeKeyPhrasesDetectionJobResponse = {
  keyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeKeyPhrasesDetectionJobResponseSchema: Schema<DescribeKeyPhrasesDetectionJobResponse> =
  s.object<DescribeKeyPhrasesDetectionJobResponse>(
    {
      keyPhrasesDetectionJobProperties: s.optional(s.lazy(() => keyPhrasesDetectionJobPropertiesSchema)),
      _keysMap: {
        keyPhrasesDetectionJobProperties: "KeyPhrasesDetectionJobProperties",
      },
    },
    { additionalProperties: s.json() },
  );
