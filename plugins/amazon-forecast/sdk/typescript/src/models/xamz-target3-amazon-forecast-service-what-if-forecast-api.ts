import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonForecastServiceWhatIfForecastApi = {
  AmazonForecastListWhatIfForecasts: "AmazonForecast.ListWhatIfForecasts",
} as const;
export type XAmzTarget3AmazonForecastServiceWhatIfForecastApi =
  | (typeof XAmzTarget3AmazonForecastServiceWhatIfForecastApi)[keyof typeof XAmzTarget3AmazonForecastServiceWhatIfForecastApi]
  | (string & {});

export const xAmzTarget3AmazonForecastServiceWhatIfForecastApiSchema: EnumSchema<XAmzTarget3AmazonForecastServiceWhatIfForecastApi> =
  s.enumOf<XAmzTarget3AmazonForecastServiceWhatIfForecastApi>(
    XAmzTarget3AmazonForecastServiceWhatIfForecastApi,
  );
