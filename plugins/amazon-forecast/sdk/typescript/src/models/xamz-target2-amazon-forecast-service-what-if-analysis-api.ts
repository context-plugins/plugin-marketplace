import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi = {
  AmazonForecastDescribeWhatIfAnalysis: "AmazonForecast.DescribeWhatIfAnalysis",
} as const;
export type XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi =
  | (typeof XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi)[keyof typeof XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServiceWhatIfAnalysisApiSchema: EnumSchema<XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi> =
  s.enumOf<XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi>(
    XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi,
  );
