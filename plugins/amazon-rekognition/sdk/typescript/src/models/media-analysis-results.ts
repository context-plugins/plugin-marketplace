import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  mediaAnalysisModelVersionsSchema,
  type MediaAnalysisModelVersions,
} from "./media-analysis-model-versions.js";
import { s3ObjectSchema, type S3Object } from "./s3-object.js";

export type MediaAnalysisResults = {
  s3Object?: S3Object;
  modelVersions?: MediaAnalysisModelVersions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaAnalysisResultsSchema: Schema<MediaAnalysisResults> = s.object<MediaAnalysisResults>(
  {
    s3Object: s.optional(s.lazy(() => s3ObjectSchema)),
    modelVersions: s.optional(s.lazy(() => mediaAnalysisModelVersionsSchema)),
    _keysMap: {
      s3Object: "S3Object",
      modelVersions: "ModelVersions",
    },
  },
  { additionalProperties: s.json() },
);
