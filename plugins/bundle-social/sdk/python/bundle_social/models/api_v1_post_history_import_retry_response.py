from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.media_type import MediaTypeOrStr
from .enums.status_bundle_social_post_import_api import StatusBundleSocialPostImportApiOrStr
from .enums.surface import SurfaceOrStr


class ApiV1PostHistoryImportRetryResponse(SdkBaseModel):
    id: str
    team_id: str = Field(alias="teamId")
    social_account_id: str = Field(alias="socialAccountId")
    requested_count: float = Field(alias="requestedCount")
    with_analytics: bool = Field(alias="withAnalytics")
    import_carousels: bool = Field(alias="importCarousels")
    only_latest: bool = Field(alias="onlyLatest")
    surface: OptionalNullable[SurfaceOrStr] = UNSET
    media_type: OptionalNullable[MediaTypeOrStr] = Field(default=UNSET, alias="mediaType")
    status: StatusBundleSocialPostImportApiOrStr
    posts_imported: float = Field(alias="postsImported")
    analytics_imported: float = Field(alias="analyticsImported")
    error: OptionalNullable[str] = UNSET
    rate_limit_reset_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="rateLimitResetAt")
    started_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    completed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class ApiV1PostHistoryImportRetryResponseDict(TypedDict):
    id: str
    team_id: str
    social_account_id: str
    requested_count: float
    with_analytics: bool
    import_carousels: bool
    only_latest: bool
    surface: NotRequired[SurfaceOrStr | None]
    media_type: NotRequired[MediaTypeOrStr | None]
    status: StatusBundleSocialPostImportApiOrStr
    posts_imported: float
    analytics_imported: float
    error: NotRequired[str | None]
    rate_limit_reset_at: NotRequired[RFC3339DateTime | None]
    started_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
