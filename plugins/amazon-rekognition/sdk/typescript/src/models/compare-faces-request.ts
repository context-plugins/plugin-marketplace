import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { imageSchema, type Image } from "./image.js";
import {
  qualityFilterAmazonRekognitionFacialAnalysisApiSchema,
  type QualityFilterAmazonRekognitionFacialAnalysisApi,
} from "./quality-filter-amazon-rekognition-facial-analysis-api.js";

export type CompareFacesRequest = {
  sourceImage: Image;
  targetImage: Image;
  /**
   * The minimum level of confidence in the face matches that a match must meet to be included in
   * the FaceMatches array.
   */
  similarityThreshold?: number;
  /**
   * A filter that specifies a quality bar for how much filtering is done to identify faces.
   * Filtered faces aren't compared. If you specify AUTO, Amazon Rekognition chooses the quality
   * bar. If you specify LOW, MEDIUM, or HIGH, filtering removes all faces that don’t meet the
   * chosen quality bar. The quality bar is based on a variety of common use cases. Low-quality
   * detections can occur for a number of reasons. Some examples are an object that's misidentified
   * as a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you
   * specify NONE, no filtering is performed. The defaul
   */
  qualityFilter?: QualityFilterAmazonRekognitionFacialAnalysisApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compareFacesRequestSchema: Schema<CompareFacesRequest> = s.object<CompareFacesRequest>(
  {
    sourceImage: imageSchema,
    targetImage: imageSchema,
    similarityThreshold: s.optional(s.float64()),
    qualityFilter: s.optional(s.lazy(() => qualityFilterAmazonRekognitionFacialAnalysisApiSchema)),
    _keysMap: {
      sourceImage: "SourceImage",
      targetImage: "TargetImage",
      similarityThreshold: "SimilarityThreshold",
      qualityFilter: "QualityFilter",
    },
  },
  { additionalProperties: s.json() },
);
