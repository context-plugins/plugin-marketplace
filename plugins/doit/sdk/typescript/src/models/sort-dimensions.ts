import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Orders the columns produced by `dimensions`, both in the console and in a rendered `fileOutput`
 * export. It does not reorder the `rows` of a JSON result. `a_to_z` orders the columns by the
 * dimension value, which for the `year`/`month`/`day` dimensions of a time series means
 * chronologically. The default `desc` orders them by the metric instead, so a monthly report charts
 * its priciest month first rather than in time order — set `a_to_z` for a time series you intend to
 * export. A report with a forecast is always charted chronologically and ignores this field, and a
 * comparative `displayValues` mode requires `a_to_z`.
 */
export const SortDimensions = {
  Asc: "asc",
  Desc: "desc",
  AToZ: "a_to_z",
} as const;
export type SortDimensions = (typeof SortDimensions)[keyof typeof SortDimensions] | (string & {});

export const sortDimensionsSchema: EnumSchema<SortDimensions> = s.enumOf<SortDimensions>(SortDimensions);
