import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobChartDataPointSchema, type JobChartDataPoint } from "./job-chart-data-point.js";

export type ChartDataResponse = {
  dataPoints?: JobChartDataPoint[];
  /** @default 0 */
  total?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chartDataResponseSchema: Schema<ChartDataResponse> = s.object<ChartDataResponse>(
  {
    dataPoints: s.optional(s.array(s.lazy(() => jobChartDataPointSchema))),
    total: s.defaulted(s.int(), 0),
    _keysMap: {
      dataPoints: "data_points",
    },
  },
  { additionalProperties: s.json() },
);
