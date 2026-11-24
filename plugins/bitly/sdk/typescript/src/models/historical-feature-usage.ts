import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historicalUsageSchema, type HistoricalUsage } from "./historical-usage.js";

export type HistoricalFeatureUsage = {
  /** feature name */
  name?: string;
  usage?: HistoricalUsage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historicalFeatureUsageSchema: Schema<HistoricalFeatureUsage> = s.object<HistoricalFeatureUsage>(
  {
    name: s.optional(s.string()),
    usage: s.optional(s.array(s.lazy(() => historicalUsageSchema))),
  },
  { additionalProperties: s.json() },
);
