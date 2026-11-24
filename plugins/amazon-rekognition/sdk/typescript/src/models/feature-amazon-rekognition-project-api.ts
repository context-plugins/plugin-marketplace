import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies feature that is being customized. If no value is provided CUSTOM_LABELS is used as a
 * default.
 */
export const FeatureAmazonRekognitionProjectApi = {
  ContentModeration: "CONTENT_MODERATION",
  CustomLabels: "CUSTOM_LABELS",
} as const;
export type FeatureAmazonRekognitionProjectApi =
  | (typeof FeatureAmazonRekognitionProjectApi)[keyof typeof FeatureAmazonRekognitionProjectApi]
  | (string & {});

export const featureAmazonRekognitionProjectApiSchema: EnumSchema<FeatureAmazonRekognitionProjectApi> =
  s.enumOf<FeatureAmazonRekognitionProjectApi>(FeatureAmazonRekognitionProjectApi);
