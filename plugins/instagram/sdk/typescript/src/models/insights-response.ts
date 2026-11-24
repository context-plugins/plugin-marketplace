import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumInstagramGraphInsightsApiSchema,
  type DatumInstagramGraphInsightsApi,
} from "./datum-instagram-graph-insights-api.js";

export type InsightsResponse = {
  data?: DatumInstagramGraphInsightsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightsResponseSchema: Schema<InsightsResponse> = s.object<InsightsResponse>(
  {
    data: s.optional(s.array(s.lazy(() => datumInstagramGraphInsightsApiSchema))),
  },
  { additionalProperties: s.json() },
);
