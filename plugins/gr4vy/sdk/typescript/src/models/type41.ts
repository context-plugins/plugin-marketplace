import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `metrics-explorer.module`. */
export const Type41 = {
  MetricsExplorerModule: "metrics-explorer.module",
} as const;
export type Type41 = (typeof Type41)[keyof typeof Type41] | (string & {});

export const type41Schema: EnumSchema<Type41> = s.enumOf<Type41>(Type41);
