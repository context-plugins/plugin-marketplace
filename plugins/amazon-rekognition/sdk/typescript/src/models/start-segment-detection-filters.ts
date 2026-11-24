import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  startShotDetectionFilterSchema,
  type StartShotDetectionFilter,
} from "./start-shot-detection-filter.js";
import {
  startTechnicalCueDetectionFilterSchema,
  type StartTechnicalCueDetectionFilter,
} from "./start-technical-cue-detection-filter.js";

export type StartSegmentDetectionFilters = {
  technicalCueFilter?: StartTechnicalCueDetectionFilter;
  shotFilter?: StartShotDetectionFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startSegmentDetectionFiltersSchema: Schema<StartSegmentDetectionFilters> =
  s.object<StartSegmentDetectionFilters>(
    {
      technicalCueFilter: s.optional(s.lazy(() => startTechnicalCueDetectionFilterSchema)),
      shotFilter: s.optional(s.lazy(() => startShotDetectionFilterSchema)),
      _keysMap: {
        technicalCueFilter: "TechnicalCueFilter",
        shotFilter: "ShotFilter",
      },
    },
    { additionalProperties: s.json() },
  );
