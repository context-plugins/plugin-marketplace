import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi = {
  AmazonForecastDeleteWhatIfAnalysis: "AmazonForecast.DeleteWhatIfAnalysis",
} as const;
export type XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi =
  | (typeof XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi)[keyof typeof XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServiceWhatIfAnalysisApiSchema: EnumSchema<XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi> =
  s.enumOf<XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi>(
    XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi,
  );
