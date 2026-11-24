import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi = {
  AmazonForecastDeletePredictorBacktestExportJob: "AmazonForecast.DeletePredictorBacktestExportJob",
} as const;
export type XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi =
  | (typeof XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi)[keyof typeof XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServicePredictorBacktestExportJobApiSchema: EnumSchema<XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi> =
  s.enumOf<XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi>(
    XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi,
  );
