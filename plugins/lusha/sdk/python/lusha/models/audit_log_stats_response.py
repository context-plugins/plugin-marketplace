from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AuditLogStatsResponse(SdkBaseModel):
    total: int
    success: int
    failed: int
    success_rate: str = Field(alias="successRate")


class AuditLogStatsResponseDict(TypedDict):
    total: int
    success: int
    failed: int
    success_rate: str
