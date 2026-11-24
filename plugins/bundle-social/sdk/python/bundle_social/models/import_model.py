from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.platform_bundle_social_comment_api import PlatformBundleSocialCommentApiOrStr
from .enums.status_bundle_social_comment_api import StatusBundleSocialCommentApiOrStr


class ImportModel(SdkBaseModel):
    id: str
    team_id: str = Field(alias="teamId")
    organization_id: OptionalNullable[str] = Field(default=UNSET, alias="organizationId")
    social_account_id: str = Field(alias="socialAccountId")
    post_id: OptionalNullable[str] = Field(default=UNSET, alias="postId")
    imported_post_id: OptionalNullable[str] = Field(default=UNSET, alias="importedPostId")
    platform: PlatformBundleSocialCommentApiOrStr
    status: StatusBundleSocialCommentApiOrStr
    comments_imported: float = Field(alias="commentsImported")
    error: OptionalNullable[str] = UNSET
    rate_limit_reset_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="rateLimitResetAt")
    started_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    completed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")


class ImportModelDict(TypedDict):
    id: str
    team_id: str
    organization_id: NotRequired[str | None]
    social_account_id: str
    post_id: NotRequired[str | None]
    imported_post_id: NotRequired[str | None]
    platform: PlatformBundleSocialCommentApiOrStr
    status: StatusBundleSocialCommentApiOrStr
    comments_imported: float
    error: NotRequired[str | None]
    rate_limit_reset_at: NotRequired[RFC3339DateTime | None]
    started_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
