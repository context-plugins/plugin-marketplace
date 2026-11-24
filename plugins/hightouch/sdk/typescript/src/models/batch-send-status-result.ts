import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sendStatusReasonCode1Schema, type SendStatusReasonCode1 } from "./send-status-reason-code1.js";
import { sendStatusSchema, type SendStatus } from "./send-status.js";

/** Delivery status for one requested send. */
export type BatchSendStatusResult = {
  /** The `sendId` this result is for, echoed from the request. */
  sendId: string;
  /**
   * Delivery status of a send. `not_found` means no send with this id exists on the campaign,
   * including a send that has not been processed yet.
   */
  status: SendStatus;
  /**
   * Readable explanation for why this send was dropped or failed. Present when `status` is
   * `"dropped"` or `"failed"`.
   */
  reason?: string;
  /** Stable code for `reason`. Present whenever `reason` is. */
  reasonCode?: SendStatusReasonCode1;
  /** ISO 8601 time the status last changed. Absent when `status` is `"not_found"`. */
  updatedAt?: string;
};

export const batchSendStatusResultSchema: Schema<BatchSendStatusResult> = s.object<BatchSendStatusResult>({
  sendId: s.string(),
  status: sendStatusSchema,
  reason: s.optional(s.string()),
  reasonCode: s.optional(s.lazy(() => sendStatusReasonCode1Schema)),
  updatedAt: s.optional(s.string()),
});
