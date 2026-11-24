import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createdBySchema, type CreatedBy } from "./created-by.js";
import { dailyCommentLimitSchema, type DailyCommentLimit } from "./daily-comment-limit.js";
import { dailyPostLimitSchema, type DailyPostLimit } from "./daily-post-limit.js";
import { promotionCodeSchema, type PromotionCode } from "./promotion-code.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";
import { teamSchema, type Team } from "./team.js";

export type ApiV1OrganizationResponse = {
  id: string;
  createdById: string;
  promotionCodeId?: string | null;
  name?: string | null;
  avatarUrl?: string | null;
  ref?: string | null;
  dailyPostLimit?: DailyPostLimit | null;
  dailyCommentLimit?: DailyCommentLimit | null;
  monthlyImportLimitPerAccount?: number | null;
  commentImportLimitPerPost?: number | null;
  monthlyReviewImportLimitPerAccount?: number | null;
  monthlyMessageLimitPerAccount?: number | null;
  monthlyAutomationExecutionLimitPerAccount?: number | null;
  apiAccess: boolean;
  analyticsDisabled: boolean;
  analyticsPostsDisabled: boolean;
  uploadsCompressionEnabled: boolean;
  analyticsInterval?: number | null;
  analyticsPostsInterval?: number | null;
  forcedAccountAnalyticsDailyLimit?: number | null;
  forcedPostAnalyticsDailyLimit?: number | null;
  showVerboseErrors: boolean;
  disconnectCheckEnabled: boolean;
  deleteAccountAfter: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  suspended?: boolean;
  createdBy: CreatedBy;
  subscription?: Subscription | null;
  promotionCode?: PromotionCode | null;
  /**
   * Deprecated: will be removed on 2026-11-15. List teams with the paginated GET /api/v1/team
   * instead.
   */
  teams: Team[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1OrganizationResponseProperties: s.Shape<ApiV1OrganizationResponse> = {
  id: s.string(),
  createdById: s.string(),
  promotionCodeId: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  avatarUrl: s.optionalNullable(s.string()),
  ref: s.optionalNullable(s.string()),
  dailyPostLimit: s.optionalNullable(s.lazy(() => dailyPostLimitSchema)),
  dailyCommentLimit: s.optionalNullable(s.lazy(() => dailyCommentLimitSchema)),
  monthlyImportLimitPerAccount: s.optionalNullable(s.float64()),
  commentImportLimitPerPost: s.optionalNullable(s.float64()),
  monthlyReviewImportLimitPerAccount: s.optionalNullable(s.float64()),
  monthlyMessageLimitPerAccount: s.optionalNullable(s.float64()),
  monthlyAutomationExecutionLimitPerAccount: s.optionalNullable(s.float64()),
  apiAccess: s.boolean(),
  analyticsDisabled: s.boolean(),
  analyticsPostsDisabled: s.boolean(),
  uploadsCompressionEnabled: s.boolean(),
  analyticsInterval: s.optionalNullable(s.float64()),
  analyticsPostsInterval: s.optionalNullable(s.float64()),
  forcedAccountAnalyticsDailyLimit: s.optionalNullable(s.float64()),
  forcedPostAnalyticsDailyLimit: s.optionalNullable(s.float64()),
  showVerboseErrors: s.boolean(),
  disconnectCheckEnabled: s.boolean(),
  deleteAccountAfter: s.int(),
  createdAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
  deletedAt: s.optionalNullable(s.dateTime()),
  suspended: s.optional(s.boolean()),
  createdBy: createdBySchema,
  subscription: s.optionalNullable(s.lazy(() => subscriptionSchema)),
  promotionCode: s.optionalNullable(s.lazy(() => promotionCodeSchema)),
  teams: s.array(s.lazy(() => teamSchema)),
};

export const apiV1OrganizationResponseInternalSchema: Schema<ApiV1OrganizationResponse> =
  s.object<ApiV1OrganizationResponse>(apiV1OrganizationResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1OrganizationResponseSchema: Schema<ApiV1OrganizationResponse> = s.lazySchema(() =>
  s.object<ApiV1OrganizationResponse>(
    {
      ...apiV1OrganizationResponseProperties,
      deleteAccountAfter: s.int().check(s.gte(0), s.lte(168)),
    },
    { additionalProperties: s.json() },
  ),
);
