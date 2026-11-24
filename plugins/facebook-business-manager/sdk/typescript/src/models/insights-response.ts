import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightsDataSchema, type InsightsData } from "./insights-data.js";
import { pagingSchema, type Paging } from "./paging.js";

export type InsightsResponse = {
  data?: InsightsData[];
  paging?: Paging;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightsResponseSchema: Schema<InsightsResponse> = s.object<InsightsResponse>(
  {
    data: s.optional(s.array(s.lazy(() => insightsDataSchema))),
    paging: s.optional(s.lazy(() => pagingSchema)),
  },
  { additionalProperties: s.json() },
);
