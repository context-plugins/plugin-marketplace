import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pointsOfInterestSchema, type PointsOfInterest } from "./points-of-interest.js";

export type CategoryEvent = {
  /** Lists the categories that were matched in your audio segment. */
  matchedCategories?: string[];
  /** Contains information about the matched categories, including category names and timestamps. */
  matchedDetails?: Record<string, PointsOfInterest>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoryEventSchema: Schema<CategoryEvent> = s.object<CategoryEvent>(
  {
    matchedCategories: s.optional(s.array(s.string())),
    matchedDetails: s.optional(
      s.record(
        s.string(),
        s.lazy(() => pointsOfInterestSchema),
      ),
    ),
    _keysMap: {
      matchedCategories: "MatchedCategories",
      matchedDetails: "MatchedDetails",
    },
  },
  { additionalProperties: s.json() },
);
