from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TopReport(SdkBaseModel):
    report_id: UUID = Field(alias="reportId")
    title: str
    views: float
    unique_viewers: float = Field(alias="uniqueViewers")
    last_viewed_at: str | None = Field(alias="lastViewedAt")


class TopReportDict(TypedDict):
    report_id: UUID
    title: str
    views: float
    unique_viewers: float
    last_viewed_at: str | None
