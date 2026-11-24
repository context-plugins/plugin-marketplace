import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historicalFeatureUsageSchema, type HistoricalFeatureUsage } from "./historical-feature-usage.js";

export type GroupHistoricalUsage = {
  /** the group's guid */
  groupGuid: string;
  /** A unit of time (day, week, or month) */
  unit: string;
  /** Start date (format "2006-01-02") of the historical usage */
  startDate: string;
  /** End date (format "2006-01-02") of the historical usage */
  endDate: string;
  /** an array of all of the group's historical feature usage */
  historicalLimitUsage: HistoricalFeatureUsage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupHistoricalUsageSchema: Schema<GroupHistoricalUsage> = s.object<GroupHistoricalUsage>(
  {
    groupGuid: s.string(),
    unit: s.string(),
    startDate: s.string(),
    endDate: s.string(),
    historicalLimitUsage: s.array(s.lazy(() => historicalFeatureUsageSchema)),
    _keysMap: {
      groupGuid: "group_guid",
      startDate: "start_date",
      endDate: "end_date",
      historicalLimitUsage: "historical_limit_usage",
    },
  },
  { additionalProperties: s.json() },
);
