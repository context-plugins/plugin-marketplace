import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ImageQualityAnalysisData = {
  quality?: string;
  score?: number;
  confidence?: number;
  modelVersion?: number;
};

export const imageQualityAnalysisDataSchema: Schema<ImageQualityAnalysisData> =
  s.object<ImageQualityAnalysisData>({
    quality: s.optional(s.string()),
    score: s.optional(s.float64()),
    confidence: s.optional(s.float64()),
    modelVersion: s.optional(s.int()),
    _keysMap: {
      modelVersion: "model_version",
    },
  });
