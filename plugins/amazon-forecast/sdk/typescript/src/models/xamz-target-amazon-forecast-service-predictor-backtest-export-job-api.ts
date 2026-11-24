import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi = {
  AmazonForecastCreatePredictorBacktestExportJob: "AmazonForecast.CreatePredictorBacktestExportJob",
} as const;
export type XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi =
  | (typeof XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi)[keyof typeof XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi]
  | (string & {});

export const xAmzTargetAmazonForecastServicePredictorBacktestExportJobApiSchema: EnumSchema<XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi> =
  s.enumOf<XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi>(
    XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi,
  );
