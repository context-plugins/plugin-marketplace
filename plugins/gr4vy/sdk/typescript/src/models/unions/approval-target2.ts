import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { approvalTargetSchema, type ApprovalTarget } from "../approval-target.js";

/**
 * The browser target that an approval URL must be opened in. If any or null, then there is no
 * specific requirement.
 */
export type ApprovalTarget2 = ApprovalTarget;

export const approvalTarget2Schema: Schema<ApprovalTarget2> = s.of<ApprovalTarget2>(
  s.union([s.lazy(() => approvalTargetSchema)]),
);
