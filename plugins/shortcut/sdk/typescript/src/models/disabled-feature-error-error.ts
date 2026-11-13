import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisabledFeatureErrorError = {
  /** The feature that is disabled */
  featureTag: string;
  /** The message explaining the error */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disabledFeatureErrorErrorSchema: Schema<DisabledFeatureErrorError> =
  s.object<DisabledFeatureErrorError>(
    {
      featureTag: s.string(),
      message: s.string(),
      _keysMap: {
        featureTag: "feature_tag",
      },
    },
    { additionalProperties: s.json() },
  );
