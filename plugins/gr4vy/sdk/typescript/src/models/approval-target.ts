import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApprovalTarget = {
  NewWindow: "new_window",
  Any: "any",
} as const;
export type ApprovalTarget = (typeof ApprovalTarget)[keyof typeof ApprovalTarget] | (string & {});

export const approvalTargetSchema: EnumSchema<ApprovalTarget> = s.enumOf<ApprovalTarget>(ApprovalTarget);
