import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Settlement status of the transferred funds in the Linked Account. */
export const SettlementStatus = {
  Pending: "pending",
  OnHold: "on_hold",
  Settled: "settled",
} as const;
export type SettlementStatus = (typeof SettlementStatus)[keyof typeof SettlementStatus] | (string & {});

export const settlementStatusSchema: EnumSchema<SettlementStatus> =
  s.enumOf<SettlementStatus>(SettlementStatus);
