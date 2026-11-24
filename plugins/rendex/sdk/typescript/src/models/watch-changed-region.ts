import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Normalized (0..1) union bounding box of all changed regions on the page — the "where" of a visual
 * change. Multiply by the capture's dimensions to get pixels; use it to crop or annotate in your
 * own tooling.
 */
export type WatchChangedRegion = {
  /** Left edge as a fraction of page width (0..1). */
  x?: number;
  /** Top edge as a fraction of page height (0..1). */
  y?: number;
  /** Width as a fraction of page width (0..1). */
  width?: number;
  /** Height as a fraction of page height (0..1). */
  height?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const watchChangedRegionSchema: Schema<WatchChangedRegion> = s.object<WatchChangedRegion>(
  {
    x: s.optional(s.float64()),
    y: s.optional(s.float64()),
    width: s.optional(s.float64()),
    height: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
