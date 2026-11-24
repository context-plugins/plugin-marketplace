import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScoreBand1 = {
  Cold: "cold",
  Warm: "warm",
  Hot: "hot",
} as const;
export type ScoreBand1 = (typeof ScoreBand1)[keyof typeof ScoreBand1] | (string & {});

export const scoreBand1Schema: EnumSchema<ScoreBand1> = s.enumOf<ScoreBand1>(ScoreBand1);
