import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Choose how to discover files to monitor */
export const Mode13 = {
  Manual: "manual",
  Auto: "auto",
} as const;
export type Mode13 = (typeof Mode13)[keyof typeof Mode13] | (string & {});

export const mode13Schema: EnumSchema<Mode13> = s.enumOf<Mode13>(Mode13);
