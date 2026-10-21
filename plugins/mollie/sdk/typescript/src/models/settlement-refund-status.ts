import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The refund's status. Settlement refunds are normally `refunded`, but can be `failed` if the
 * refund could not be processed.
 */
export const SettlementRefundStatus = {
  Refunded: "refunded",
  Failed: "failed",
} as const;
export type SettlementRefundStatus =
  | (typeof SettlementRefundStatus)[keyof typeof SettlementRefundStatus]
  | (string & {});

export const settlementRefundStatusSchema: EnumSchema<SettlementRefundStatus> =
  s.enumOf<SettlementRefundStatus>(SettlementRefundStatus);
