import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Round1 = {
  PreSeed: "pre_seed",
  Seed: "seed",
  SeriesA: "series_a",
  SeriesB: "series_b",
  SeriesC: "series_c",
  SeriesD: "series_d",
  SeriesE: "series_e",
  SeriesF: "series_f",
  SeriesG: "series_g",
  SeriesH: "series_h",
  Other: "other",
} as const;
export type Round1 = (typeof Round1)[keyof typeof Round1] | (string & {});

export const round1Schema: EnumSchema<Round1> = s.enumOf<Round1>(Round1);
