import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Approval URL that will receive a charge payment method reference. */
export type ApprovalUrl = string;

export const approvalUrlSchema: Schema<ApprovalUrl> = s.of<ApprovalUrl>(s.union([s.string()]));
