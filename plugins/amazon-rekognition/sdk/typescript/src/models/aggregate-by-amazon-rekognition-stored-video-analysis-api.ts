import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines how to aggregate the returned results. Results can be aggregated by timestamps or
 * segments.
 */
export const AggregateByAmazonRekognitionStoredVideoAnalysisApi = {
  Timestamps: "TIMESTAMPS",
  Segments: "SEGMENTS",
} as const;
export type AggregateByAmazonRekognitionStoredVideoAnalysisApi =
  | (typeof AggregateByAmazonRekognitionStoredVideoAnalysisApi)[keyof typeof AggregateByAmazonRekognitionStoredVideoAnalysisApi]
  | (string & {});

export const aggregateByAmazonRekognitionStoredVideoAnalysisApiSchema: EnumSchema<AggregateByAmazonRekognitionStoredVideoAnalysisApi> =
  s.enumOf<AggregateByAmazonRekognitionStoredVideoAnalysisApi>(
    AggregateByAmazonRekognitionStoredVideoAnalysisApi,
  );
