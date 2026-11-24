from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .report import Report, ReportDict


class ApiV1ReportsResponse(SdkBaseModel):
    reports: list[Report]
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""


class ApiV1ReportsResponseDict(TypedDict):
    reports: list[ReportDict]
    next_cursor: str | None
