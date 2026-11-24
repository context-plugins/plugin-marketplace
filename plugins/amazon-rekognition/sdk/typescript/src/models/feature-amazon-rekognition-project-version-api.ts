import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The feature that was customized. */
export const FeatureAmazonRekognitionProjectVersionApi = {
  ContentModeration: "CONTENT_MODERATION",
  CustomLabels: "CUSTOM_LABELS",
} as const;
export type FeatureAmazonRekognitionProjectVersionApi =
  | (typeof FeatureAmazonRekognitionProjectVersionApi)[keyof typeof FeatureAmazonRekognitionProjectVersionApi]
  | (string & {});

export const featureAmazonRekognitionProjectVersionApiSchema: EnumSchema<FeatureAmazonRekognitionProjectVersionApi> =
  s.enumOf<FeatureAmazonRekognitionProjectVersionApi>(FeatureAmazonRekognitionProjectVersionApi);
