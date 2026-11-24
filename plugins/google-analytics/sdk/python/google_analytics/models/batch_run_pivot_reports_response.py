from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .run_pivot_report_response import RunPivotReportResponse, RunPivotReportResponseDict


class BatchRunPivotReportsResponse(SdkBaseModel):
    """The batch response containing multiple pivot reports."""

    pivot_reports: Optional[list[RunPivotReportResponse]] = Field(default=UNSET, alias="pivotReports")
    """Individual responses. Each response has a separate pivot report request."""

    kind: Optional[str] = UNSET
    """Identifies what kind of resource this message is. This ``kind`` is always the fixed string
    "analyticsData#batchRunPivotReports". Useful to distinguish between response types in JSON."""


class BatchRunPivotReportsResponseDict(TypedDict):
    pivot_reports: NotRequired[list[RunPivotReportResponseDict]]
    kind: NotRequired[str]
