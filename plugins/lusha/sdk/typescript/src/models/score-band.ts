import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Qualitative score band. */
export const ScoreBand = {
  Cold: "cold",
  Warm: "warm",
  Hot: "hot",
} as const;
export type ScoreBand = (typeof ScoreBand)[keyof typeof ScoreBand] | (string & {});

export const scoreBandSchema: EnumSchema<ScoreBand> = s.enumOf<ScoreBand>(ScoreBand);
