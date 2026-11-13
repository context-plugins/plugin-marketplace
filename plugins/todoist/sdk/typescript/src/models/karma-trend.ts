import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The user's karma trend. Can be 'up', 'down', or '-' (no change) */
export const KarmaTrend = {
  Up: "up",
  Down: "down",
  U002D: "-",
} as const;
export type KarmaTrend = (typeof KarmaTrend)[keyof typeof KarmaTrend] | (string & {});

export const karmaTrendSchema: EnumSchema<KarmaTrend> = s.enumOf<KarmaTrend>(KarmaTrend);
