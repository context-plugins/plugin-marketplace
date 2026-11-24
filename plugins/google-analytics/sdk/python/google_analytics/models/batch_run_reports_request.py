from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .run_report_request import RunReportRequest, RunReportRequestDict


class BatchRunReportsRequest(SdkBaseModel):
    """The batch request containing multiple report requests."""

    requests: Optional[list[RunReportRequest]] = UNSET
    """Individual requests. Each request has a separate report response. Each batch request is allowed up to 5
    requests."""


class BatchRunReportsRequestDict(TypedDict):
    requests: NotRequired[list[RunReportRequestDict]]
