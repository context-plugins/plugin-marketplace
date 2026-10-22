import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The optional URL that the buyer needs to be redirected to to further authorize the token
 * creation.
 */
export type ApprovalUrl3 = string;

export const approvalUrl3Schema: Schema<ApprovalUrl3> = s.of<ApprovalUrl3>(s.union([s.string()]));
