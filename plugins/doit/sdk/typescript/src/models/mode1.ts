import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Forecast granularity mode. */
export const Mode1 = {
  Totals: "totals",
  Grouping: "grouping",
} as const;
export type Mode1 = (typeof Mode1)[keyof typeof Mode1] | (string & {});

export const mode1Schema: EnumSchema<Mode1> = s.enumOf<Mode1>(Mode1);
