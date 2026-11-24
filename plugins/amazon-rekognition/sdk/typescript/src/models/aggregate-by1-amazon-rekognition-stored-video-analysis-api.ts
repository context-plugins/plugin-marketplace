import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The aggregation method chosen for a GetLabelDetection request. */
export const AggregateBy1AmazonRekognitionStoredVideoAnalysisApi = {
  Timestamps: "TIMESTAMPS",
  Segments: "SEGMENTS",
} as const;
export type AggregateBy1AmazonRekognitionStoredVideoAnalysisApi =
  | (typeof AggregateBy1AmazonRekognitionStoredVideoAnalysisApi)[keyof typeof AggregateBy1AmazonRekognitionStoredVideoAnalysisApi]
  | (string & {});

export const aggregateBy1AmazonRekognitionStoredVideoAnalysisApiSchema: EnumSchema<AggregateBy1AmazonRekognitionStoredVideoAnalysisApi> =
  s.enumOf<AggregateBy1AmazonRekognitionStoredVideoAnalysisApi>(
    AggregateBy1AmazonRekognitionStoredVideoAnalysisApi,
  );
