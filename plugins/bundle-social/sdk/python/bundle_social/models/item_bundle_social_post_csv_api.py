from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status_bundle_social_post_csv_api import StatusBundleSocialPostCsvApiOrStr


class ItemBundleSocialPostCsvApi(SdkBaseModel):
    id: str
    team_id: str = Field(alias="teamId")
    organization_id: str = Field(alias="organizationId")
    status: StatusBundleSocialPostCsvApiOrStr
    file_name: str = Field(alias="fileName")
    total_rows: float = Field(alias="totalRows")
    processed_rows: float = Field(alias="processedRows")
    success_rows: float = Field(alias="successRows")
    failed_rows: float = Field(alias="failedRows")
    error: OptionalNullable[str] = UNSET
    rate_limit_reset_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="rateLimitResetAt")
    started_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    completed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class ItemBundleSocialPostCsvApiDict(TypedDict):
    id: str
    team_id: str
    organization_id: str
    status: StatusBundleSocialPostCsvApiOrStr
    file_name: str
    total_rows: float
    processed_rows: float
    success_rows: float
    failed_rows: float
    error: NotRequired[str | None]
    rate_limit_reset_at: NotRequired[RFC3339DateTime | None]
    started_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
