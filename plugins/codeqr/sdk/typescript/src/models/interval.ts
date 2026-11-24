import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The interval to retrieve analytics for. Takes precedence over start and end. */
export const Interval = {
  _1H: "1h",
  _24H: "24h",
  _7D: "7d",
  _30D: "30d",
  _90D: "90d",
  Ytd: "ytd",
  _1Y: "1y",
  All: "all",
  AllUnfiltered: "all_unfiltered",
} as const;
export type Interval = (typeof Interval)[keyof typeof Interval] | (string & {});

export const intervalSchema: EnumSchema<Interval> = s.enumOf<Interval>(Interval);
