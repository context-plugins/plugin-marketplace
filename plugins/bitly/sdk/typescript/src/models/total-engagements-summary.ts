import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { engagementSchema, type Engagement } from "./engagement.js";
import { unitSchema, type Unit } from "./unit.js";

export type TotalEngagementsSummary = {
  totalEngagements?: number;
  engagements?: Engagement;
  units?: number;
  unit?: Unit;
  unitReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const totalEngagementsSummarySchema: Schema<TotalEngagementsSummary> =
  s.object<TotalEngagementsSummary>(
    {
      totalEngagements: s.optional(s.int()),
      engagements: s.optional(s.lazy(() => engagementSchema)),
      units: s.optional(s.int()),
      unit: s.optional(s.lazy(() => unitSchema)),
      unitReference: s.optional(s.string()),
      _keysMap: {
        totalEngagements: "total_engagements",
        unitReference: "unit_reference",
      },
    },
    { additionalProperties: s.json() },
  );
