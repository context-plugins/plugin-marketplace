import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SpendLimitAction = {
  Alert: "alert",
  Block: "block",
} as const;
export type SpendLimitAction = (typeof SpendLimitAction)[keyof typeof SpendLimitAction] | (string & {});

export const spendLimitActionSchema: EnumSchema<SpendLimitAction> =
  s.enumOf<SpendLimitAction>(SpendLimitAction);
