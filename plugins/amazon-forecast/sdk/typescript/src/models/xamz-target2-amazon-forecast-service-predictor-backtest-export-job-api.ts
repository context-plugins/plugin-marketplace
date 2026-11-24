import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi = {
  AmazonForecastDescribePredictorBacktestExportJob: "AmazonForecast.DescribePredictorBacktestExportJob",
} as const;
export type XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi =
  | (typeof XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi)[keyof typeof XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServicePredictorBacktestExportJobApiSchema: EnumSchema<XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi> =
  s.enumOf<XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi>(
    XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi,
  );
