import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detectionFilterSchema, type DetectionFilter } from "./detection-filter.js";
import { regionOfInterestSchema, type RegionOfInterest } from "./region-of-interest.js";

export type DetectTextFilters = {
  wordFilter?: DetectionFilter;
  /**
   * A Filter focusing on a certain area of the image. Uses a BoundingBox object to set the region
   * of the image.
   */
  regionsOfInterest?: RegionOfInterest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectTextFiltersSchema: Schema<DetectTextFilters> = s.object<DetectTextFilters>(
  {
    wordFilter: s.optional(s.lazy(() => detectionFilterSchema)),
    regionsOfInterest: s.optional(s.array(s.lazy(() => regionOfInterestSchema))),
    _keysMap: {
      wordFilter: "WordFilter",
      regionsOfInterest: "RegionsOfInterest",
    },
  },
  { additionalProperties: s.json() },
);
