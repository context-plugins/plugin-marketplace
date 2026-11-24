import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceWhatIfForecastApi = {
  AmazonForecastCreateWhatIfForecast: "AmazonForecast.CreateWhatIfForecast",
} as const;
export type XAmzTargetAmazonForecastServiceWhatIfForecastApi =
  | (typeof XAmzTargetAmazonForecastServiceWhatIfForecastApi)[keyof typeof XAmzTargetAmazonForecastServiceWhatIfForecastApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceWhatIfForecastApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceWhatIfForecastApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceWhatIfForecastApi>(
    XAmzTargetAmazonForecastServiceWhatIfForecastApi,
  );
