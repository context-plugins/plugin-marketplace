import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  mediaAnalysisDetectModerationLabelsConfigSchema,
  type MediaAnalysisDetectModerationLabelsConfig,
} from "./media-analysis-detect-moderation-labels-config.js";

export type MediaAnalysisOperationsConfig = {
  detectModerationLabels?: MediaAnalysisDetectModerationLabelsConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaAnalysisOperationsConfigSchema: Schema<MediaAnalysisOperationsConfig> =
  s.object<MediaAnalysisOperationsConfig>(
    {
      detectModerationLabels: s.optional(s.lazy(() => mediaAnalysisDetectModerationLabelsConfigSchema)),
      _keysMap: {
        detectModerationLabels: "DetectModerationLabels",
      },
    },
    { additionalProperties: s.json() },
  );
