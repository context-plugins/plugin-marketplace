from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.severity import SeverityOrStr
from .enums.status_deliverd_dev_governance_api import StatusDeliverdDevGovernanceApiOrStr


class Item(SdkBaseModel):
    id: UUID
    task_id: UUID | None = Field(alias="taskId")
    ai_system_id: UUID | None = Field(alias="aiSystemId")
    title: str
    description: str
    severity: SeverityOrStr
    status: StatusDeliverdDevGovernanceApiOrStr
    reported_by_label: str = Field(alias="reportedByLabel")
    reported_at: RFC3339DateTime = Field(alias="reportedAt")
    resolution: str | None
    resolved_by_label: str | None = Field(alias="resolvedByLabel")
    resolved_at: RFC3339DateTime | None = Field(alias="resolvedAt")


class ItemDict(TypedDict):
    id: UUID
    task_id: UUID | None
    ai_system_id: UUID | None
    title: str
    description: str
    severity: SeverityOrStr
    status: StatusDeliverdDevGovernanceApiOrStr
    reported_by_label: str
    reported_at: RFC3339DateTime
    resolution: str | None
    resolved_by_label: str | None
    resolved_at: RFC3339DateTime | None
