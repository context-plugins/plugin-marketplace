import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Normalized bounding region for a chunk (when available). */
export type SemanticSearchBoundingBox = {
  x?: number;
  y?: number;
};

export const semanticSearchBoundingBoxSchema: Schema<SemanticSearchBoundingBox> =
  s.object<SemanticSearchBoundingBox>({
    x: s.optional(s.float64()),
    y: s.optional(s.float64()),
  });
