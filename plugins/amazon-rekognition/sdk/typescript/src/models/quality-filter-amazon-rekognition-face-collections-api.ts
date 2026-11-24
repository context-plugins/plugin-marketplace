import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered
 * faces aren't indexed. If you specify AUTO, Amazon Rekognition chooses the quality bar. If you
 * specify LOW, MEDIUM, or HIGH, filtering removes all faces that don’t meet the chosen quality bar.
 * The default value is AUTO. The quality bar is based on a variety of common use cases. Low-quality
 * detections can occur for a number of reasons. Some examples are an object that's misidentified as
 * a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you specify
 * NONE, no filterin
 */
export const QualityFilterAmazonRekognitionFaceCollectionsApi = {
  None: "NONE",
  Auto: "AUTO",
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type QualityFilterAmazonRekognitionFaceCollectionsApi =
  | (typeof QualityFilterAmazonRekognitionFaceCollectionsApi)[keyof typeof QualityFilterAmazonRekognitionFaceCollectionsApi]
  | (string & {});

export const qualityFilterAmazonRekognitionFaceCollectionsApiSchema: EnumSchema<QualityFilterAmazonRekognitionFaceCollectionsApi> =
  s.enumOf<QualityFilterAmazonRekognitionFaceCollectionsApi>(
    QualityFilterAmazonRekognitionFaceCollectionsApi,
  );
