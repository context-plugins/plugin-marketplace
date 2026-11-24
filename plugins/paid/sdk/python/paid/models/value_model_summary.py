from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.value_model_summary_status import ValueModelSummaryStatusOrStr


class ValueModelSummary(SdkBaseModel):
    id: UUID
    version: int
    status: ValueModelSummaryStatusOrStr
    created_at: RFC3339DateTime = Field(alias="createdAt")
    activated_at: RFC3339DateTime | None = Field(alias="activatedAt")
    archived_at: RFC3339DateTime | None = Field(alias="archivedAt")
    effective_from: RFC3339DateTime | None = Field(alias="effectiveFrom")
    effective_to: RFC3339DateTime | None = Field(alias="effectiveTo")


class ValueModelSummaryDict(TypedDict):
    id: UUID
    version: int
    status: ValueModelSummaryStatusOrStr
    created_at: RFC3339DateTime
    activated_at: RFC3339DateTime | None
    archived_at: RFC3339DateTime | None
    effective_from: RFC3339DateTime | None
    effective_to: RFC3339DateTime | None
