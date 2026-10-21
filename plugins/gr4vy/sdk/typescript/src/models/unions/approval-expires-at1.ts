import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The date and time when the buyer's approval window for this transaction expires. If not provided,
 * this is automatically computed from the connector's default expiration time. The value cannot
 * exceed the connector's maximum approval window.
 */
export type ApprovalExpiresAt1 = Date;

export const approvalExpiresAt1Schema: Schema<ApprovalExpiresAt1> = s.of<ApprovalExpiresAt1>(
  s.union([s.dateTime()]),
);
