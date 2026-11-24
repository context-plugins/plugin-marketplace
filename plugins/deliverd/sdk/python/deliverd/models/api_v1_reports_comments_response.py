from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .thread_deliverd_dev_reports_api import ThreadDeliverdDevReportsApi, ThreadDeliverdDevReportsApiDict


class ApiV1ReportsCommentsResponse(SdkBaseModel):
    report_id: UUID = Field(alias="reportId")
    threads: list[ThreadDeliverdDevReportsApi]
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""


class ApiV1ReportsCommentsResponseDict(TypedDict):
    report_id: UUID
    threads: list[ThreadDeliverdDevReportsApiDict]
    next_cursor: str | None
