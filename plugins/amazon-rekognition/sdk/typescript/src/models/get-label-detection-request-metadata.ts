import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  aggregateBy1AmazonRekognitionStoredVideoAnalysisApiSchema,
  type AggregateBy1AmazonRekognitionStoredVideoAnalysisApi,
} from "./aggregate-by1-amazon-rekognition-stored-video-analysis-api.js";
import {
  sortBy1AmazonRekognitionStoredVideoAnalysisApiSchema,
  type SortBy1AmazonRekognitionStoredVideoAnalysisApi,
} from "./sort-by1-amazon-rekognition-stored-video-analysis-api.js";

export type GetLabelDetectionRequestMetadata = {
  /** The sorting method chosen for a GetLabelDetection request. */
  sortBy?: SortBy1AmazonRekognitionStoredVideoAnalysisApi;
  /** The aggregation method chosen for a GetLabelDetection request. */
  aggregateBy?: AggregateBy1AmazonRekognitionStoredVideoAnalysisApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getLabelDetectionRequestMetadataSchema: Schema<GetLabelDetectionRequestMetadata> =
  s.object<GetLabelDetectionRequestMetadata>(
    {
      sortBy: s.optional(s.lazy(() => sortBy1AmazonRekognitionStoredVideoAnalysisApiSchema)),
      aggregateBy: s.optional(s.lazy(() => aggregateBy1AmazonRekognitionStoredVideoAnalysisApiSchema)),
      _keysMap: {
        sortBy: "SortBy",
        aggregateBy: "AggregateBy",
      },
    },
    { additionalProperties: s.json() },
  );
