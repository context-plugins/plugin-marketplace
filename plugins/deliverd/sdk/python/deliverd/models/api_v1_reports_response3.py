from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .report import Report, ReportDict


class ApiV1ReportsResponse3(SdkBaseModel):
    report: Report
    url: str
    previous_slug: str | None = Field(alias="previousSlug")


class ApiV1ReportsResponse3Dict(TypedDict):
    report: ReportDict
    url: str
    previous_slug: str | None
