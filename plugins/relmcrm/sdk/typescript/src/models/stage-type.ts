import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Semantic stage type - use this for won/lost, cross-pipeline, instead of string-matching the key.
 */
export const StageType = {
  Open: "open",
  Won: "won",
  Lost: "lost",
} as const;
export type StageType = (typeof StageType)[keyof typeof StageType] | (string & {});

export const stageTypeSchema: EnumSchema<StageType> = s.enumOf<StageType>(StageType);
