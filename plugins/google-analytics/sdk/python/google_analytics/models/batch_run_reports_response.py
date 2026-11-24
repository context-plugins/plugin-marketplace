from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .run_report_response import RunReportResponse, RunReportResponseDict


class BatchRunReportsResponse(SdkBaseModel):
    """The batch response containing multiple reports."""

    reports: Optional[list[RunReportResponse]] = UNSET
    """Individual responses. Each response has a separate report request."""

    kind: Optional[str] = UNSET
    """Identifies what kind of resource this message is. This ``kind`` is always the fixed string
    "analyticsData#batchRunReports". Useful to distinguish between response types in JSON."""


class BatchRunReportsResponseDict(TypedDict):
    reports: NotRequired[list[RunReportResponseDict]]
    kind: NotRequired[str]
