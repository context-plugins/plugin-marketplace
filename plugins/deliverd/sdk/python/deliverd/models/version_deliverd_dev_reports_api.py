from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.scan_status import ScanStatusOrStr


class VersionDeliverdDevReportsApi(SdkBaseModel):
    id: UUID
    version_number: float = Field(alias="versionNumber")
    scan_status: ScanStatusOrStr = Field(alias="scanStatus")
    size_bytes: float = Field(alias="sizeBytes")
    file_count: float = Field(alias="fileCount")
    source_tool: str | None = Field(alias="sourceTool")
    created_by_label: str | None = Field(alias="createdByLabel")
    change_summary: str | None = Field(alias="changeSummary")
    created_at: str = Field(alias="createdAt")


class VersionDeliverdDevReportsApiDict(TypedDict):
    id: UUID
    version_number: float
    scan_status: ScanStatusOrStr
    size_bytes: float
    file_count: float
    source_tool: str | None
    created_by_label: str | None
    change_summary: str | None
    created_at: str
