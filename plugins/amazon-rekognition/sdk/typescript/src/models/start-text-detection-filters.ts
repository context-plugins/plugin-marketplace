import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detectionFilterSchema, type DetectionFilter } from "./detection-filter.js";
import { regionOfInterestSchema, type RegionOfInterest } from "./region-of-interest.js";

export type StartTextDetectionFilters = {
  wordFilter?: DetectionFilter;
  /**
   * Filter focusing on a certain area of the frame. Uses a BoundingBox object to set the region of
   * the screen.
   */
  regionsOfInterest?: RegionOfInterest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTextDetectionFiltersSchema: Schema<StartTextDetectionFilters> =
  s.object<StartTextDetectionFilters>(
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
