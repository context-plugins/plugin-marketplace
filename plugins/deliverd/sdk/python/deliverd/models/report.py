from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.classification_deliverd_dev_reports_api import ClassificationDeliverdDevReportsApiOrStr
from .enums.status_deliverd_dev_reports_api import StatusDeliverdDevReportsApiOrStr


class Report(SdkBaseModel):
    id: UUID
    title: str
    slug: str
    description: str | None
    workspace_id: UUID | None = Field(alias="workspaceId")
    owner_id: UUID | None = Field(alias="ownerId")
    classification: ClassificationDeliverdDevReportsApiOrStr
    status: StatusDeliverdDevReportsApiOrStr
    is_living: bool = Field(alias="isLiving")
    current_version: float | None = Field(alias="currentVersion")
    source_tool: str | None = Field(alias="sourceTool")
    task_id: UUID | None = Field(alias="taskId")
    url: str
    created_at: str = Field(alias="createdAt")
    updated_at: str = Field(alias="updatedAt")


class ReportDict(TypedDict):
    id: UUID
    title: str
    slug: str
    description: str | None
    workspace_id: UUID | None
    owner_id: UUID | None
    classification: ClassificationDeliverdDevReportsApiOrStr
    status: StatusDeliverdDevReportsApiOrStr
    is_living: bool
    current_version: float | None
    source_tool: str | None
    task_id: UUID | None
    url: str
    created_at: str
    updated_at: str
