import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServiceWhatIfForecastApi = {
  AmazonForecastDescribeWhatIfForecast: "AmazonForecast.DescribeWhatIfForecast",
} as const;
export type XAmzTarget2AmazonForecastServiceWhatIfForecastApi =
  | (typeof XAmzTarget2AmazonForecastServiceWhatIfForecastApi)[keyof typeof XAmzTarget2AmazonForecastServiceWhatIfForecastApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServiceWhatIfForecastApiSchema: EnumSchema<XAmzTarget2AmazonForecastServiceWhatIfForecastApi> =
  s.enumOf<XAmzTarget2AmazonForecastServiceWhatIfForecastApi>(
    XAmzTarget2AmazonForecastServiceWhatIfForecastApi,
  );
