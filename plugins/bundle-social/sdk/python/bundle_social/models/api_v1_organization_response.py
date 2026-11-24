from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .created_by import CreatedBy, CreatedByDict
from .daily_comment_limit import DailyCommentLimit, DailyCommentLimitDict
from .daily_post_limit import DailyPostLimit, DailyPostLimitDict
from .promotion_code import PromotionCode, PromotionCodeDict
from .subscription import Subscription, SubscriptionDict
from .team import Team, TeamDict


class ApiV1OrganizationResponse(SdkBaseModel):
    id: str
    created_by_id: str = Field(alias="createdById")
    promotion_code_id: OptionalNullable[str] = Field(default=UNSET, alias="promotionCodeId")
    name: OptionalNullable[str] = UNSET
    avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="avatarUrl")
    ref: OptionalNullable[str] = UNSET
    daily_post_limit: OptionalNullable[DailyPostLimit] = Field(default=UNSET, alias="dailyPostLimit")
    daily_comment_limit: OptionalNullable[DailyCommentLimit] = Field(default=UNSET, alias="dailyCommentLimit")
    monthly_import_limit_per_account: OptionalNullable[float] = Field(
        default=UNSET, alias="monthlyImportLimitPerAccount"
    )
    comment_import_limit_per_post: OptionalNullable[float] = Field(default=UNSET, alias="commentImportLimitPerPost")
    monthly_review_import_limit_per_account: OptionalNullable[float] = Field(
        default=UNSET, alias="monthlyReviewImportLimitPerAccount"
    )
    monthly_message_limit_per_account: OptionalNullable[float] = Field(
        default=UNSET, alias="monthlyMessageLimitPerAccount"
    )
    monthly_automation_execution_limit_per_account: OptionalNullable[float] = Field(
        default=UNSET, alias="monthlyAutomationExecutionLimitPerAccount"
    )
    api_access: bool = Field(alias="apiAccess")
    analytics_disabled: bool = Field(alias="analyticsDisabled")
    analytics_posts_disabled: bool = Field(alias="analyticsPostsDisabled")
    uploads_compression_enabled: bool = Field(alias="uploadsCompressionEnabled")
    analytics_interval: OptionalNullable[float] = Field(default=UNSET, alias="analyticsInterval")
    analytics_posts_interval: OptionalNullable[float] = Field(default=UNSET, alias="analyticsPostsInterval")
    forced_account_analytics_daily_limit: OptionalNullable[float] = Field(
        default=UNSET, alias="forcedAccountAnalyticsDailyLimit"
    )
    forced_post_analytics_daily_limit: OptionalNullable[float] = Field(
        default=UNSET, alias="forcedPostAnalyticsDailyLimit"
    )
    show_verbose_errors: bool = Field(alias="showVerboseErrors")
    disconnect_check_enabled: bool = Field(alias="disconnectCheckEnabled")
    delete_account_after: int = Field(alias="deleteAccountAfter")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")
    suspended: Optional[bool] = UNSET
    created_by: CreatedBy = Field(alias="createdBy")
    subscription: OptionalNullable[Subscription] = UNSET
    promotion_code: OptionalNullable[PromotionCode] = Field(default=UNSET, alias="promotionCode")
    teams: list[Team]
    """Deprecated: will be removed on 2026-11-15. List teams with the paginated GET /api/v1/team instead."""


class ApiV1OrganizationResponseDict(TypedDict):
    id: str
    created_by_id: str
    promotion_code_id: NotRequired[str | None]
    name: NotRequired[str | None]
    avatar_url: NotRequired[str | None]
    ref: NotRequired[str | None]
    daily_post_limit: NotRequired[DailyPostLimitDict | None]
    daily_comment_limit: NotRequired[DailyCommentLimitDict | None]
    monthly_import_limit_per_account: NotRequired[float | None]
    comment_import_limit_per_post: NotRequired[float | None]
    monthly_review_import_limit_per_account: NotRequired[float | None]
    monthly_message_limit_per_account: NotRequired[float | None]
    monthly_automation_execution_limit_per_account: NotRequired[float | None]
    api_access: bool
    analytics_disabled: bool
    analytics_posts_disabled: bool
    uploads_compression_enabled: bool
    analytics_interval: NotRequired[float | None]
    analytics_posts_interval: NotRequired[float | None]
    forced_account_analytics_daily_limit: NotRequired[float | None]
    forced_post_analytics_daily_limit: NotRequired[float | None]
    show_verbose_errors: bool
    disconnect_check_enabled: bool
    delete_account_after: int
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
    suspended: NotRequired[bool]
    created_by: CreatedByDict
    subscription: NotRequired[SubscriptionDict | None]
    promotion_code: NotRequired[PromotionCodeDict | None]
    teams: list[TeamDict]
