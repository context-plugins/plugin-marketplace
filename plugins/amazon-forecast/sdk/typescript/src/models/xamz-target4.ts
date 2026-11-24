import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4 = {
  AmazonForecastUpdateDatasetGroup: "AmazonForecast.UpdateDatasetGroup",
} as const;
export type XAmzTarget4 = (typeof XAmzTarget4)[keyof typeof XAmzTarget4] | (string & {});

export const xAmzTarget4Schema: EnumSchema<XAmzTarget4> = s.enumOf<XAmzTarget4>(XAmzTarget4);
