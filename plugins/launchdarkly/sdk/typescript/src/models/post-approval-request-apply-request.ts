import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostApprovalRequestApplyRequest = {
  /** Optional comment about the approval request */
  comment?: string;
};

export const postApprovalRequestApplyRequestSchema: Schema<PostApprovalRequestApplyRequest> =
  s.object<PostApprovalRequestApplyRequest>({
    comment: s.optional(s.string()),
  });
