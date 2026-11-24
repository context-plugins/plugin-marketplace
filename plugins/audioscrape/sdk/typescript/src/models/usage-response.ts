import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageCounterSchema, type UsageCounter } from "./usage-counter.js";

export type UsageResponse = {
  dataCalls: UsageCounter;
  keywordAlerts: UsageCounter;
  /** Calendar month the usage counters cover (UTC, format `YYYY-MM`). */
  period: string;
  searches: UsageCounter;
  semanticSearches: UsageCounter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageResponseSchema: Schema<UsageResponse> = s.object<UsageResponse>(
  {
    dataCalls: usageCounterSchema,
    keywordAlerts: usageCounterSchema,
    period: s.string(),
    searches: usageCounterSchema,
    semanticSearches: usageCounterSchema,
    _keysMap: {
      dataCalls: "data_calls",
      keywordAlerts: "keyword_alerts",
      semanticSearches: "semantic_searches",
    },
  },
  { additionalProperties: s.json() },
);
