from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .run_pivot_report_request import RunPivotReportRequest, RunPivotReportRequestDict


class BatchRunPivotReportsRequest(SdkBaseModel):
    """The batch request containing multiple pivot report requests."""

    requests: Optional[list[RunPivotReportRequest]] = UNSET
    """Individual requests. Each request has a separate pivot report response. Each batch request is allowed up to 5
    requests."""


class BatchRunPivotReportsRequestDict(TypedDict):
    requests: NotRequired[list[RunPivotReportRequestDict]]
