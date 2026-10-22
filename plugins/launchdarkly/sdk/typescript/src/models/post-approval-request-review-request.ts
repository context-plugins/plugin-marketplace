import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind20Schema, type Kind20 } from "./kind20.js";

export type PostApprovalRequestReviewRequest = {
  /** The type of review for this approval request */
  kind?: Kind20;
  /** Optional comment about the approval request */
  comment?: string;
};

export const postApprovalRequestReviewRequestSchema: Schema<PostApprovalRequestReviewRequest> =
  s.object<PostApprovalRequestReviewRequest>({
    kind: s.optional(s.lazy(() => kind20Schema)),
    comment: s.optional(s.string()),
  });
