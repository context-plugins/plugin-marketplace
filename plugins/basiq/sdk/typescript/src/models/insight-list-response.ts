import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightInternalSchema, insightSchema, type Insight } from "./insight.js";
import {
  links4InsightsApiInternalSchema,
  links4InsightsApiSchema,
  type Links4InsightsApi,
} from "./links4-insights-api.js";

export type InsightListResponse = {
  /** Response type indicator @default "list" */
  type?: "list";
  /** Total number of insights available */
  count: number;
  /** Array of insight objects */
  data: Insight[];
  links: Links4InsightsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const insightListResponseProperties: s.Shape<InsightListResponse> = {
  type: s.defaulted(s.literal("list"), "list"),
  count: s.int(),
  data: s.array(s.lazy(() => insightInternalSchema)),
  links: links4InsightsApiInternalSchema,
};

export const insightListResponseInternalSchema: Schema<InsightListResponse> = s.object<InsightListResponse>(
  insightListResponseProperties,
  { additionalProperties: s.json() },
);

export const insightListResponseSchema: Schema<InsightListResponse> = s.lazySchema(() =>
  s.object<InsightListResponse>(
    {
      ...insightListResponseProperties,
      data: s.array(s.lazy(() => insightSchema)),
      links: links4InsightsApiSchema,
    },
    { additionalProperties: s.json() },
  ),
);
