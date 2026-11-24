import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 'relative' = a rolling window ending today (set `unit` + `amount`); 'absolute' = a fixed calendar
 * range (set `start` + `end`).
 */
export const CreateCustomViewRequestPeriodKind = {
  Relative: "relative",
  Absolute: "absolute",
} as const;
export type CreateCustomViewRequestPeriodKind =
  | (typeof CreateCustomViewRequestPeriodKind)[keyof typeof CreateCustomViewRequestPeriodKind]
  | (string & {});

export const createCustomViewRequestPeriodKindSchema: EnumSchema<CreateCustomViewRequestPeriodKind> =
  s.enumOf<CreateCustomViewRequestPeriodKind>(CreateCustomViewRequestPeriodKind);
