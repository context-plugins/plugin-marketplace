import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FeatureOverride = {
  environment: string;
  variation: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featureOverrideSchema: Schema<FeatureOverride> = s.object<FeatureOverride>(
  {
    environment: s.string(),
    variation: s.string(),
    _keysMap: {
      environment: "_environment",
      variation: "_variation",
    },
  },
  { additionalProperties: s.json() },
);
