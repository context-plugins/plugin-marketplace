import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceWhatIfAnalysisApi = {
  AmazonForecastCreateWhatIfAnalysis: "AmazonForecast.CreateWhatIfAnalysis",
} as const;
export type XAmzTargetAmazonForecastServiceWhatIfAnalysisApi =
  | (typeof XAmzTargetAmazonForecastServiceWhatIfAnalysisApi)[keyof typeof XAmzTargetAmazonForecastServiceWhatIfAnalysisApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceWhatIfAnalysisApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceWhatIfAnalysisApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceWhatIfAnalysisApi>(
    XAmzTargetAmazonForecastServiceWhatIfAnalysisApi,
  );
