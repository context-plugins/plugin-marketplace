from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status_bundle_social_post_csv_api import StatusBundleSocialPostCsvApiOrStr


class ApiV1PostCsvImportStatusResponse(SdkBaseModel):
    id: str
    status: StatusBundleSocialPostCsvApiOrStr
    total_rows: float = Field(alias="totalRows")
    processed_rows: float = Field(alias="processedRows")
    success_rows: float = Field(alias="successRows")
    failed_rows: float = Field(alias="failedRows")
    error: OptionalNullable[str] = UNSET
    started_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    completed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")


class ApiV1PostCsvImportStatusResponseDict(TypedDict):
    id: str
    status: StatusBundleSocialPostCsvApiOrStr
    total_rows: float
    processed_rows: float
    success_rows: float
    failed_rows: float
    error: NotRequired[str | None]
    started_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
    updated_at: RFC3339DateTime | None
