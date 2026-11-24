import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Review class for Spend \& Expense Transactions. */
export type Review = {
  /** BILL-generated ID of the review */
  id?: string;
  /** Set as `true` if the transaction was approved */
  isApproved?: boolean;
  /** Review note */
  note?: string;
  /** Review created date and time */
  createdTime?: Date;
  /** Review deleted date and time (if available) */
  deletedTime?: Date;
  /**
   * BILL-generated ID of the user who reviewed the transaction
   *
   * @deprecated
   */
  reviewerId?: string;
  /** BILL-generated UUID of the user who reviewed the transaction */
  reviewerUuid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reviewSchema: Schema<Review> = s.object<Review>(
  {
    id: s.optional(s.string()),
    isApproved: s.optional(s.boolean()),
    note: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    deletedTime: s.optional(s.dateTime()),
    reviewerId: s.optional(s.string()),
    reviewerUuid: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
