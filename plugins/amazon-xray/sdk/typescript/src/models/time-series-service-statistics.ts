import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { edgeStatisticsSchema, type EdgeStatistics } from "./edge-statistics.js";
import { forecastStatisticsSchema, type ForecastStatistics } from "./forecast-statistics.js";
import { histogramEntrySchema, type HistogramEntry } from "./histogram-entry.js";
import { serviceStatisticsSchema, type ServiceStatistics } from "./service-statistics.js";

export type TimeSeriesServiceStatistics = {
  /** Timestamp of the window for which statistics are aggregated. */
  timestamp?: Date;
  edgeSummaryStatistics?: EdgeStatistics;
  serviceSummaryStatistics?: ServiceStatistics;
  serviceForecastStatistics?: ForecastStatistics;
  /** The response time histogram for the selected entities. */
  responseTimeHistogram?: HistogramEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeSeriesServiceStatisticsSchema: Schema<TimeSeriesServiceStatistics> =
  s.object<TimeSeriesServiceStatistics>(
    {
      timestamp: s.optional(s.dateTime()),
      edgeSummaryStatistics: s.optional(s.lazy(() => edgeStatisticsSchema)),
      serviceSummaryStatistics: s.optional(s.lazy(() => serviceStatisticsSchema)),
      serviceForecastStatistics: s.optional(s.lazy(() => forecastStatisticsSchema)),
      responseTimeHistogram: s.optional(s.array(s.lazy(() => histogramEntrySchema))),
      _keysMap: {
        timestamp: "Timestamp",
        edgeSummaryStatistics: "EdgeSummaryStatistics",
        serviceSummaryStatistics: "ServiceSummaryStatistics",
        serviceForecastStatistics: "ServiceForecastStatistics",
        responseTimeHistogram: "ResponseTimeHistogram",
      },
    },
    { additionalProperties: s.json() },
  );
