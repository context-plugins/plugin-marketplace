import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargeStatusCallnodeIoFaxesApi = {
  Charged: "charged",
  Unpriced: "unpriced",
  InsufficientBalance: "insufficient_balance",
  Skipped: "skipped",
  Test: "test",
} as const;
export type ChargeStatusCallnodeIoFaxesApi =
  | (typeof ChargeStatusCallnodeIoFaxesApi)[keyof typeof ChargeStatusCallnodeIoFaxesApi]
  | (string & {});

export const chargeStatusCallnodeIoFaxesApiSchema: EnumSchema<ChargeStatusCallnodeIoFaxesApi> =
  s.enumOf<ChargeStatusCallnodeIoFaxesApi>(ChargeStatusCallnodeIoFaxesApi);
