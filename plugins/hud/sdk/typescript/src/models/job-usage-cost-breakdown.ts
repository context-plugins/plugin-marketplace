import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailsSchema, type Details } from "./unions/details.js";

export type JobUsageCostBreakdown = {
  /** @default 0 */
  cost?: number;
  /** @default 0 */
  count?: number;
  details?: Details;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobUsageCostBreakdownSchema: Schema<JobUsageCostBreakdown> = s.object<JobUsageCostBreakdown>(
  {
    cost: s.defaulted(s.float64(), 0),
    count: s.defaulted(s.int(), 0),
    details: s.optional(s.lazy(() => detailsSchema)),
  },
  { additionalProperties: s.json() },
);
