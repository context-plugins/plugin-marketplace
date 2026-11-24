import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServiceWhatIfForecastApi = {
  AmazonForecastDeleteWhatIfForecast: "AmazonForecast.DeleteWhatIfForecast",
} as const;
export type XAmzTarget1AmazonForecastServiceWhatIfForecastApi =
  | (typeof XAmzTarget1AmazonForecastServiceWhatIfForecastApi)[keyof typeof XAmzTarget1AmazonForecastServiceWhatIfForecastApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServiceWhatIfForecastApiSchema: EnumSchema<XAmzTarget1AmazonForecastServiceWhatIfForecastApi> =
  s.enumOf<XAmzTarget1AmazonForecastServiceWhatIfForecastApi>(
    XAmzTarget1AmazonForecastServiceWhatIfForecastApi,
  );
