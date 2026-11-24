import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dailyCommentLimitSchema, type DailyCommentLimit } from "./daily-comment-limit.js";
import { dailyPostLimitSchema, type DailyPostLimit } from "./daily-post-limit.js";

export type OrganizationBundleSocialTeamApi = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const organizationBundleSocialTeamApiProperties: s.Shape<OrganizationBundleSocialTeamApi> = {
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
};

export const organizationBundleSocialTeamApiInternalSchema: Schema<OrganizationBundleSocialTeamApi> =
  s.object<OrganizationBundleSocialTeamApi>(organizationBundleSocialTeamApiProperties, {
    additionalProperties: s.json(),
  });

export const organizationBundleSocialTeamApiSchema: Schema<OrganizationBundleSocialTeamApi> = s.lazySchema(
  () =>
    s.object<OrganizationBundleSocialTeamApi>(
      {
        ...organizationBundleSocialTeamApiProperties,
        deleteAccountAfter: s.int().check(s.gte(0), s.lte(168)),
      },
      { additionalProperties: s.json() },
    ),
);
