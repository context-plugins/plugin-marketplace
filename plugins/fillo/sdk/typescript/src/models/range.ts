import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Range = {
  _7D: "7d",
  _30D: "30d",
  _90D: "90d",
  All: "all",
} as const;
export type Range = (typeof Range)[keyof typeof Range] | (string & {});

export const rangeSchema: EnumSchema<Range> = s.enumOf<Range>(Range);
