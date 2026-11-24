import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dominantLanguageDetectionJobPropertiesSchema,
  type DominantLanguageDetectionJobProperties,
} from "./dominant-language-detection-job-properties.js";

export type DescribeDominantLanguageDetectionJobResponse = {
  dominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDominantLanguageDetectionJobResponseSchema: Schema<DescribeDominantLanguageDetectionJobResponse> =
  s.object<DescribeDominantLanguageDetectionJobResponse>(
    {
      dominantLanguageDetectionJobProperties: s.optional(
        s.lazy(() => dominantLanguageDetectionJobPropertiesSchema),
      ),
      _keysMap: {
        dominantLanguageDetectionJobProperties: "DominantLanguageDetectionJobProperties",
      },
    },
    { additionalProperties: s.json() },
  );
