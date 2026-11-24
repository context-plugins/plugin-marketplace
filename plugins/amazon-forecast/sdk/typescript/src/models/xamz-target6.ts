import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget6 = {
  AmazonForecastListWhatIfAnalyses: "AmazonForecast.ListWhatIfAnalyses",
} as const;
export type XAmzTarget6 = (typeof XAmzTarget6)[keyof typeof XAmzTarget6] | (string & {});

export const xAmzTarget6Schema: EnumSchema<XAmzTarget6> = s.enumOf<XAmzTarget6>(XAmzTarget6);
