import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The optional URL that the buyer needs to be redirected to to further authorize their payment. */
export type ApprovalUrl1 = string;

export const approvalUrl1Schema: Schema<ApprovalUrl1> = s.of<ApprovalUrl1>(s.union([s.string()]));
