import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UserOverride = {
  feature: string;
  featureName: string;
  environment: string;
  environmentName: string;
  variation: string;
  variationName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userOverrideSchema: Schema<UserOverride> = s.object<UserOverride>(
  {
    feature: s.string(),
    featureName: s.string(),
    environment: s.string(),
    environmentName: s.string(),
    variation: s.string(),
    variationName: s.string(),
    _keysMap: {
      feature: "_feature",
      environment: "_environment",
      variation: "_variation",
    },
  },
  { additionalProperties: s.json() },
);
