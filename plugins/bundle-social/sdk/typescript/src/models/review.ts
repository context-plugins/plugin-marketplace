import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reviewReplyStateSchema, type ReviewReplyState } from "./review-reply-state.js";
import { starRatingSchema, type StarRating } from "./star-rating.js";

export type Review = {
  id: string;
  socialAccountId: string;
  teamId: string;
  externalReviewId: string;
  reviewerDisplayName?: string | null;
  reviewerProfilePhotoUrl?: string | null;
  starRating?: StarRating | null;
  comment?: string | null;
  reviewReplyComment?: string | null;
  reviewReplyUpdatedAt?: Date | null;
  reviewReplyState?: ReviewReplyState | null;
  reviewReplyPolicyViolation?: string | null;
  reviewReplyUrl?: string | null;
  createTime?: Date | null;
  updateTime?: Date | null;
  importedAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reviewSchema: Schema<Review> = s.object<Review>(
  {
    id: s.string(),
    socialAccountId: s.string(),
    teamId: s.string(),
    externalReviewId: s.string(),
    reviewerDisplayName: s.optionalNullable(s.string()),
    reviewerProfilePhotoUrl: s.optionalNullable(s.string()),
    starRating: s.optionalNullable(s.lazy(() => starRatingSchema)),
    comment: s.optionalNullable(s.string()),
    reviewReplyComment: s.optionalNullable(s.string()),
    reviewReplyUpdatedAt: s.optionalNullable(s.dateTime()),
    reviewReplyState: s.optionalNullable(s.lazy(() => reviewReplyStateSchema)),
    reviewReplyPolicyViolation: s.optionalNullable(s.string()),
    reviewReplyUrl: s.optionalNullable(s.string()),
    createTime: s.optionalNullable(s.dateTime()),
    updateTime: s.optionalNullable(s.dateTime()),
    importedAt: s.optionalNullable(s.dateTime()),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    deletedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
