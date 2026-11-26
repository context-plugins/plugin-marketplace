import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approverTypeSchema, type ApproverType } from "./approver-type.js";
import {
  transactionReviewerStatusTypeSchema,
  type TransactionReviewerStatusType,
} from "./transaction-reviewer-status-type.js";

/** Spend \& Expense transactions reviewer information. */
export type Reviewer = {
  approverType?: ApproverType;
  /** Transaction review date and time */
  reviewedTime?: Date;
  status?: TransactionReviewerStatusType;
  /**
   * BILL-generated ID of the user assigned to review the transaction
   *
   * @deprecated
   */
  userId?: string;
  /** BILL-generated UUID of the user assigned to review the transaction */
  userUuid?: string;
  /** Display name of the user assigned to review the transaction */
  userName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reviewerSchema: Schema<Reviewer> = s.object<Reviewer>(
  {
    approverType: s.optional(s.lazy(() => approverTypeSchema)),
    reviewedTime: s.optional(s.dateTime()),
    status: s.optional(s.lazy(() => transactionReviewerStatusTypeSchema)),
    userId: s.optional(s.string()),
    userUuid: s.optional(s.string()),
    userName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
