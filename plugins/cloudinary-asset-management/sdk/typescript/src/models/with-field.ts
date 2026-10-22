import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WithField = {
  /** Includes the `context` key-value pairs attached to each asset. */
  Context: "context",
  /** Includes the list of `tags` attached to each asset. */
  Tags: "tags",
  /**
   * Includes embedded metadata extracted from the asset file (EXIF, IPTC, XMP under
   * `image_metadata`). Tier 2 feature.
   */
  ImageMetadata: "image_metadata",
  /**
   * Includes analysis results such as `colors`, `face_count`, `illustration_score`, and `grayscale`
   * under `image_analysis`. Tier 2 feature.
   */
  ImageAnalysis: "image_analysis",
  /** Includes values of structured metadata fields under `metadata`. Tier 2 feature. */
  Metadata: "metadata",
  /** Includes `quality_analysis.*` scores for assets analyzed at upload time. */
  QualityAnalysis: "quality_analysis",
  /** Includes `accessibility_analysis.*` scores for assets analyzed at upload time. */
  AccessibilityAnalysis: "accessibility_analysis",
} as const;
export type WithField = (typeof WithField)[keyof typeof WithField] | (string & {});

export const withFieldSchema: EnumSchema<WithField> = s.enumOf<WithField>(WithField);
