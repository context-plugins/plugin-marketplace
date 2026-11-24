from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status3 import Status3OrStr


class ApiV1MiscGoogleBusinessReviewsImportResponse(SdkBaseModel):
    id: str
    team_id: str = Field(alias="teamId")
    social_account_id: str = Field(alias="socialAccountId")
    requested_count: float = Field(alias="requestedCount")
    status: Status3OrStr
    reviews_imported: float = Field(alias="reviewsImported")
    error: OptionalNullable[str] = UNSET
    rate_limit_reset_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="rateLimitResetAt")
    started_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    completed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class ApiV1MiscGoogleBusinessReviewsImportResponseDict(TypedDict):
    id: str
    team_id: str
    social_account_id: str
    requested_count: float
    status: Status3OrStr
    reviews_imported: float
    error: NotRequired[str | None]
    rate_limit_reset_at: NotRequired[RFC3339DateTime | None]
    started_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
