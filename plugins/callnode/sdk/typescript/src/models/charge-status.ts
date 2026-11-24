import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargeStatus = {
  Charged: "charged",
  Skipped: "skipped",
  InsufficientBalance: "insufficient_balance",
  Test: "test",
  Error: "error",
} as const;
export type ChargeStatus = (typeof ChargeStatus)[keyof typeof ChargeStatus] | (string & {});

export const chargeStatusSchema: EnumSchema<ChargeStatus> = s.enumOf<ChargeStatus>(ChargeStatus);
