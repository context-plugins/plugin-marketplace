import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date this transaction's approval URL will expire at. */
export type ApprovalExpiresAt = Date;

export const approvalExpiresAtSchema: Schema<ApprovalExpiresAt> = s.of<ApprovalExpiresAt>(
  s.union([s.dateTime()]),
);
