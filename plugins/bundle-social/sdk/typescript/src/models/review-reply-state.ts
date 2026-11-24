import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReviewReplyState = {
  ReviewReplyStateUnspecified: "REVIEW_REPLY_STATE_UNSPECIFIED",
  Pending: "PENDING",
  Rejected: "REJECTED",
  Approved: "APPROVED",
} as const;
export type ReviewReplyState = (typeof ReviewReplyState)[keyof typeof ReviewReplyState] | (string & {});

export const reviewReplyStateSchema: EnumSchema<ReviewReplyState> =
  s.enumOf<ReviewReplyState>(ReviewReplyState);
