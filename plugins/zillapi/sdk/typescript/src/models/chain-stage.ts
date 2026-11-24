import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** search or detail for chained jobs, null otherwise. */
export const ChainStage = {
  Search: "search",
  Detail: "detail",
} as const;
export type ChainStage = (typeof ChainStage)[keyof typeof ChainStage] | (string & {});

export const chainStageSchema: EnumSchema<ChainStage> = s.enumOf<ChainStage>(ChainStage);
