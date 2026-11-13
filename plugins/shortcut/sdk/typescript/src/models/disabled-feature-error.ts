import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisabledFeatureError = {
  /** The feature that is disabled */
  featureTag: string;
  /** The message explaining the error */
  message: string;
};

export const disabledFeatureErrorSchema: Schema<DisabledFeatureError> = s.object<DisabledFeatureError>({
  featureTag: s.string(),
  message: s.string(),
  _keysMap: {
    featureTag: "feature_tag",
  },
});
