import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Bounding box in decimal degrees. REQUIRED unless searchUrls is supplied at the request level —
 * the search engine needs a real bounding box to render results.
 */
export type Bbox = {
  west: number;
  south: number;
  east: number;
  north: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bboxSchema: Schema<Bbox> = s.object<Bbox>(
  {
    west: s.float64(),
    south: s.float64(),
    east: s.float64(),
    north: s.float64(),
  },
  { additionalProperties: s.json() },
);
