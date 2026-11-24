import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 'relative' = a rolling window ending today (set `unit` + `amount`); 'absolute' = a fixed calendar
 * range (set `start` + `end`).
 */
export const CustomViewSummaryPeriodKind = {
  Relative: "relative",
  Absolute: "absolute",
} as const;
export type CustomViewSummaryPeriodKind =
  | (typeof CustomViewSummaryPeriodKind)[keyof typeof CustomViewSummaryPeriodKind]
  | (string & {});

export const customViewSummaryPeriodKindSchema: EnumSchema<CustomViewSummaryPeriodKind> =
  s.enumOf<CustomViewSummaryPeriodKind>(CustomViewSummaryPeriodKind);
