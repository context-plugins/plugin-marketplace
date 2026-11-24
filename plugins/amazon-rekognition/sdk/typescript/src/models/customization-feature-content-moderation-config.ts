import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomizationFeatureContentModerationConfig = {
  /**
   * The confidence level you plan to use to identify if unsafe content is present during inference.
   */
  confidenceThreshold?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customizationFeatureContentModerationConfigSchema: Schema<CustomizationFeatureContentModerationConfig> =
  s.object<CustomizationFeatureContentModerationConfig>(
    {
      confidenceThreshold: s.optional(s.float64()),
      _keysMap: {
        confidenceThreshold: "ConfidenceThreshold",
      },
    },
    { additionalProperties: s.json() },
  );
