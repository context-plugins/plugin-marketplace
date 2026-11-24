import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2 = {
  AmazonForecastDescribeDatasetGroup: "AmazonForecast.DescribeDatasetGroup",
} as const;
export type XAmzTarget2 = (typeof XAmzTarget2)[keyof typeof XAmzTarget2] | (string & {});

export const xAmzTarget2Schema: EnumSchema<XAmzTarget2> = s.enumOf<XAmzTarget2>(XAmzTarget2);
