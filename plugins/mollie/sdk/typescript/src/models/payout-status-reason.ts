import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutStatusReasonCodeSchema, type PayoutStatusReasonCode } from "./payout-status-reason-code.js";

/** The reason for the payout's current status. */
export type PayoutStatusReason = {
  /** A machine-readable code describing the reason for the payout's current status. */
  code: PayoutStatusReasonCode;
  /** A human-readable description of the status reason. */
  message: string;
};

export const payoutStatusReasonSchema: Schema<PayoutStatusReason> = s.object<PayoutStatusReason>({
  code: payoutStatusReasonCodeSchema,
  message: s.string(),
});
