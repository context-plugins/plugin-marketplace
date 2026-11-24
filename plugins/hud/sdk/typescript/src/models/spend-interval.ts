import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SpendInterval = {
  Week: "week",
  Month: "month",
} as const;
export type SpendInterval = (typeof SpendInterval)[keyof typeof SpendInterval] | (string & {});

export const spendIntervalSchema: EnumSchema<SpendInterval> = s.enumOf<SpendInterval>(SpendInterval);
