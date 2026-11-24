import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Editorial importance (omitted on a tombstone). `notable` = front-page-worthy; `routine` = factual
 * ledger record; `commentary` = single-article opinion/analysis.
 */
export const Significance = {
  Notable: "notable",
  Routine: "routine",
  Commentary: "commentary",
} as const;
export type Significance = (typeof Significance)[keyof typeof Significance] | (string & {});

export const significanceSchema: EnumSchema<Significance> = s.enumOf<Significance>(Significance);
