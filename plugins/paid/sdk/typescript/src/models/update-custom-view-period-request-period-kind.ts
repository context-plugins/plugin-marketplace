import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 'relative' = a rolling window ending today (set `unit` + `amount`); 'absolute' = a fixed calendar
 * range (set `start` + `end`).
 */
export const UpdateCustomViewPeriodRequestPeriodKind = {
  Relative: "relative",
  Absolute: "absolute",
} as const;
export type UpdateCustomViewPeriodRequestPeriodKind =
  | (typeof UpdateCustomViewPeriodRequestPeriodKind)[keyof typeof UpdateCustomViewPeriodRequestPeriodKind]
  | (string & {});

export const updateCustomViewPeriodRequestPeriodKindSchema: EnumSchema<UpdateCustomViewPeriodRequestPeriodKind> =
  s.enumOf<UpdateCustomViewPeriodRequestPeriodKind>(UpdateCustomViewPeriodRequestPeriodKind);
