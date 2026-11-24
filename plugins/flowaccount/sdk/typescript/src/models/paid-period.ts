import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Monthly 3 = Daily */
export const PaidPeriod = {
  _1: 1,
  _3: 3,
} as const;
export type PaidPeriod = (typeof PaidPeriod)[keyof typeof PaidPeriod] | (number & {});

export const paidPeriodSchema: EnumSchema<PaidPeriod> = s.enumOf<PaidPeriod>(PaidPeriod);
