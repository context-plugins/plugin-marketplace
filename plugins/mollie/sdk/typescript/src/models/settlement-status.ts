import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the settlement. */
export const SettlementStatus = {
  Open: "open",
  Pending: "pending",
  Processing: "processing",
  ProcessingAtBank: "processing-at-bank",
  Paidout: "paidout",
  Failed: "failed",
} as const;
export type SettlementStatus = (typeof SettlementStatus)[keyof typeof SettlementStatus] | (string & {});

export const settlementStatusSchema: EnumSchema<SettlementStatus> =
  s.enumOf<SettlementStatus>(SettlementStatus);
