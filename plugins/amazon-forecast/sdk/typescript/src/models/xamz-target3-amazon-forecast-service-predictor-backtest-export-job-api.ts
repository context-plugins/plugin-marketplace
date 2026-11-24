import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi = {
  AmazonForecastListPredictorBacktestExportJobs: "AmazonForecast.ListPredictorBacktestExportJobs",
} as const;
export type XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi =
  | (typeof XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi)[keyof typeof XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi]
  | (string & {});

export const xAmzTarget3AmazonForecastServicePredictorBacktestExportJobApiSchema: EnumSchema<XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi> =
  s.enumOf<XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi>(
    XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi,
  );
