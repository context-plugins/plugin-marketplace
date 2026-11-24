import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered
 * faces aren't searched for in the collection. If you specify AUTO, Amazon Rekognition chooses the
 * quality bar. If you specify LOW, MEDIUM, or HIGH, filtering removes all faces that don’t meet the
 * chosen quality bar. The quality bar is based on a variety of common use cases. Low-quality
 * detections can occur for a number of reasons. Some examples are an object that's misidentified as
 * a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you specify
 * NONE, no filtering is
 */
export const QualityFilter = {
  None: "NONE",
  Auto: "AUTO",
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type QualityFilter = (typeof QualityFilter)[keyof typeof QualityFilter] | (string & {});

export const qualityFilterSchema: EnumSchema<QualityFilter> = s.enumOf<QualityFilter>(QualityFilter);
