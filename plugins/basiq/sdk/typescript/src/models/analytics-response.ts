import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum1CoreAnalyticsApiSchema, type Datum1CoreAnalyticsApi } from "./datum1-core-analytics-api.js";
import { initial1Schema, type Initial1 } from "./initial1.js";
import { metaCoreAnalyticsApiSchema, type MetaCoreAnalyticsApi } from "./meta-core-analytics-api.js";

export type AnalyticsResponse = {
  interval?: string;
  fromDate?: string;
  toDate?: string;
  meta?: MetaCoreAnalyticsApi;
  initial?: Initial1;
  data?: Datum1CoreAnalyticsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsResponseSchema: Schema<AnalyticsResponse> = s.object<AnalyticsResponse>(
  {
    interval: s.optional(s.string()),
    fromDate: s.optional(s.dateOnly()),
    toDate: s.optional(s.dateOnly()),
    meta: s.optional(s.lazy(() => metaCoreAnalyticsApiSchema)),
    initial: s.optional(s.lazy(() => initial1Schema)),
    data: s.optional(s.array(s.lazy(() => datum1CoreAnalyticsApiSchema))),
  },
  { additionalProperties: s.json() },
);
