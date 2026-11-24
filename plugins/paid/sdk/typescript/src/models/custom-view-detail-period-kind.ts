import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 'relative' = a rolling window ending today (set `unit` + `amount`); 'absolute' = a fixed calendar
 * range (set `start` + `end`).
 */
export const CustomViewDetailPeriodKind = {
  Relative: "relative",
  Absolute: "absolute",
} as const;
export type CustomViewDetailPeriodKind =
  | (typeof CustomViewDetailPeriodKind)[keyof typeof CustomViewDetailPeriodKind]
  | (string & {});

export const customViewDetailPeriodKindSchema: EnumSchema<CustomViewDetailPeriodKind> =
  s.enumOf<CustomViewDetailPeriodKind>(CustomViewDetailPeriodKind);
