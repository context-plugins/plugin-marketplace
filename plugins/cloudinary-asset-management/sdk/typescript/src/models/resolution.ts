import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output resolution tier, measured on the longest edge. Defaults to `1K` when omitted.
 * * `0.5K`: ~512 px
 * * `1K`: ~1024 px
 * * `2K`: ~2048 px
 * * `4K`: ~4096 px
 */
export const Resolution = {
  _05K: "0.5K",
  _1K: "1K",
  _2K: "2K",
  _4K: "4K",
} as const;
export type Resolution = (typeof Resolution)[keyof typeof Resolution] | (string & {});

export const resolutionSchema: EnumSchema<Resolution> = s.enumOf<Resolution>(Resolution);
