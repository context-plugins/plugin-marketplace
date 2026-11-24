from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InactiveReport(SdkBaseModel):
    report_id: UUID = Field(alias="reportId")
    title: str
    last_viewed_at: str | None = Field(alias="lastViewedAt")
    published_at: str | None = Field(alias="publishedAt")


class InactiveReportDict(TypedDict):
    report_id: UUID
    title: str
    last_viewed_at: str | None
    published_at: str | None
