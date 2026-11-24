import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Customer commitment approval state for this scope. Absent or unrecognized stored values
 * (including `REJECTED`) are returned as `pending_approval`, except on autonomous automation-mode
 * lines, where they are returned as `approved` since no customer approval is required.
 */
export const PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi = {
  PendingApproval: "pending_approval",
  Approved: "approved",
  Paused: "paused",
} as const;
export type PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi =
  | (typeof PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi)[keyof typeof PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi]
  | (string & {});

export const purchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApiSchema: EnumSchema<PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi> =
  s.enumOf<PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi>(
    PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi,
  );
