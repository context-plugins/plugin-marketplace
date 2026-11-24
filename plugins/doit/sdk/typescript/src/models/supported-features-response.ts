import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { supportedFeatureSchema, type SupportedFeature } from "./supported-feature.js";

/** Response containing the supported features for a CloudConnect account. */
export type SupportedFeaturesResponse = {
  /** List of features and their permission status. */
  supportedFeatures?: SupportedFeature[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const supportedFeaturesResponseSchema: Schema<SupportedFeaturesResponse> =
  s.object<SupportedFeaturesResponse>(
    {
      supportedFeatures: s.optional(s.array(s.lazy(() => supportedFeatureSchema))),
    },
    { additionalProperties: s.json() },
  );
