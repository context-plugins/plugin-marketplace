import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customizationFeatureContentModerationConfigSchema,
  type CustomizationFeatureContentModerationConfig,
} from "./customization-feature-content-moderation-config.js";

export type CustomizationFeatureConfig = {
  contentModeration?: CustomizationFeatureContentModerationConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customizationFeatureConfigSchema: Schema<CustomizationFeatureConfig> =
  s.object<CustomizationFeatureConfig>(
    {
      contentModeration: s.optional(s.lazy(() => customizationFeatureContentModerationConfigSchema)),
      _keysMap: {
        contentModeration: "ContentModeration",
      },
    },
    { additionalProperties: s.json() },
  );
