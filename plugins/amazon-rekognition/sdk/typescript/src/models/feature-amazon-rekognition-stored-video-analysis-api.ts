import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeatureAmazonRekognitionStoredVideoAnalysisApi = {
  GeneralLabels: "GENERAL_LABELS",
} as const;
export type FeatureAmazonRekognitionStoredVideoAnalysisApi =
  | (typeof FeatureAmazonRekognitionStoredVideoAnalysisApi)[keyof typeof FeatureAmazonRekognitionStoredVideoAnalysisApi]
  | (string & {});

export const featureAmazonRekognitionStoredVideoAnalysisApiSchema: EnumSchema<FeatureAmazonRekognitionStoredVideoAnalysisApi> =
  s.enumOf<FeatureAmazonRekognitionStoredVideoAnalysisApi>(FeatureAmazonRekognitionStoredVideoAnalysisApi);
