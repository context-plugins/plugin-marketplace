import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * PAGINATION (default, up to ~820 results); MAP_MARKERS (fastest, up to ~500, less data per row);
 * PAGINATION_WITH_ZOOM_IN (exhaustive recursive zoom, always runs async).
 */
export const ExtractionMethod = {
  PaginationWithZoomIn: "PAGINATION_WITH_ZOOM_IN",
  Pagination: "PAGINATION",
  MapMarkers: "MAP_MARKERS",
} as const;
export type ExtractionMethod = (typeof ExtractionMethod)[keyof typeof ExtractionMethod] | (string & {});

export const extractionMethodSchema: EnumSchema<ExtractionMethod> =
  s.enumOf<ExtractionMethod>(ExtractionMethod);
