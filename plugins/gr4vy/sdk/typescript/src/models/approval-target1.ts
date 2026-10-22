import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The browser target that an approval URL must be opened in. If any or null, then there is no
 * specific requirement.
 */
export const ApprovalTarget1 = {
  NewWindow: "new_window",
  Any: "any",
} as const;
export type ApprovalTarget1 = (typeof ApprovalTarget1)[keyof typeof ApprovalTarget1] | (string & {});

export const approvalTarget1Schema: EnumSchema<ApprovalTarget1> = s.enumOf<ApprovalTarget1>(ApprovalTarget1);
