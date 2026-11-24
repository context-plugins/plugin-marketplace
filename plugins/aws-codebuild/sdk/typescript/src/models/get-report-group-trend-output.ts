import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportGroupTrendStatsSchema, type ReportGroupTrendStats } from "./report-group-trend-stats.js";
import { reportWithRawDataSchema, type ReportWithRawData } from "./report-with-raw-data.js";

export type GetReportGroupTrendOutput = {
  stats?: ReportGroupTrendStats;
  /** An array that contains the raw data for each report. */
  rawData?: ReportWithRawData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getReportGroupTrendOutputSchema: Schema<GetReportGroupTrendOutput> =
  s.object<GetReportGroupTrendOutput>(
    {
      stats: s.optional(s.lazy(() => reportGroupTrendStatsSchema)),
      rawData: s.optional(s.array(s.lazy(() => reportWithRawDataSchema))),
    },
    { additionalProperties: s.json() },
  );
