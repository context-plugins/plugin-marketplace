import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recommendationValueSchema, type RecommendationValue } from "./recommendation-value.js";

export type Recommendation = {
  id: string;
  socialAccountId: string;
  teamId: string;
  externalRecommendationId: string;
  openGraphStoryId?: string | null;
  reviewerDisplayName?: string | null;
  reviewerProfilePhotoUrl?: string | null;
  recommendationValue?: RecommendationValue | null;
  rating?: number | null;
  comment?: string | null;
  hasMedia: boolean;
  mediaSummary?: string[] | null;
  ownerReplyComment?: string | null;
  ownerReplyCommentId?: string | null;
  ownerReplyUpdatedAt?: Date | null;
  createTime?: Date | null;
  updateTime?: Date | null;
  importedAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendationSchema: Schema<Recommendation> = s.object<Recommendation>(
  {
    id: s.string(),
    socialAccountId: s.string(),
    teamId: s.string(),
    externalRecommendationId: s.string(),
    openGraphStoryId: s.optionalNullable(s.string()),
    reviewerDisplayName: s.optionalNullable(s.string()),
    reviewerProfilePhotoUrl: s.optionalNullable(s.string()),
    recommendationValue: s.optionalNullable(s.lazy(() => recommendationValueSchema)),
    rating: s.optionalNullable(s.float64()),
    comment: s.optionalNullable(s.string()),
    hasMedia: s.boolean(),
    mediaSummary: s.optionalNullable(s.array(s.string())),
    ownerReplyComment: s.optionalNullable(s.string()),
    ownerReplyCommentId: s.optionalNullable(s.string()),
    ownerReplyUpdatedAt: s.optionalNullable(s.dateTime()),
    createTime: s.optionalNullable(s.dateTime()),
    updateTime: s.optionalNullable(s.dateTime()),
    importedAt: s.optionalNullable(s.dateTime()),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    deletedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
