import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Approval status of a bill response. */
export const BillApprovalStatusResponse = {
  Unassigned: "UNASSIGNED",
  Assigned: "ASSIGNED",
  Approved: "APPROVED",
  Approving: "APPROVING",
  Denied: "DENIED",
  Undefined: "UNDEFINED",
} as const;
export type BillApprovalStatusResponse =
  | (typeof BillApprovalStatusResponse)[keyof typeof BillApprovalStatusResponse]
  | (string & {});

export const billApprovalStatusResponseSchema: EnumSchema<BillApprovalStatusResponse> =
  s.enumOf<BillApprovalStatusResponse>(BillApprovalStatusResponse);
