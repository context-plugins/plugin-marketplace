from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .report import Report, ReportDict


class BatchGetReportsOutput(SdkBaseModel):
    reports: Optional[list[Report]] = UNSET
    """The array of Report objects returned by BatchGetReports."""

    reports_not_found: Optional[list[str]] = Field(default=UNSET, alias="reportsNotFound")
    """An array of ARNs passed to BatchGetReportGroups that are not associated with a Report."""


class BatchGetReportsOutputDict(TypedDict):
    reports: NotRequired[list[ReportDict]]
    reports_not_found: NotRequired[list[str]]
