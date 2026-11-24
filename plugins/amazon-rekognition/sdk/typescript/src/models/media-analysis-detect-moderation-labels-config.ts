import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MediaAnalysisDetectModerationLabelsConfig = {
  /**
   * Specifies the minimum confidence level for the moderation labels to return. Amazon Rekognition
   * doesn't return any labels with a confidence level lower than this specified value.
   */
  minConfidence?: number;
  /**
   * Specifies the custom moderation model to be used during the label detection job. If not
   * provided the pre-trained model is used.
   */
  projectVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaAnalysisDetectModerationLabelsConfigSchema: Schema<MediaAnalysisDetectModerationLabelsConfig> =
  s.object<MediaAnalysisDetectModerationLabelsConfig>(
    {
      minConfidence: s.optional(s.float64()),
      projectVersion: s.optional(s.string()),
      _keysMap: {
        minConfidence: "MinConfidence",
        projectVersion: "ProjectVersion",
      },
    },
    { additionalProperties: s.json() },
  );
