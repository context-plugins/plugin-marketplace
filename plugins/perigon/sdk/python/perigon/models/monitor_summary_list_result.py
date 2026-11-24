from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .signal_summary_dto import SignalSummaryDto, SignalSummaryDtoDict


class MonitorSummaryListResult(SdkBaseModel):
    """Paginated list of monitor summaries."""

    total: int
    """Total number of matching summaries across all pages."""

    data: list[SignalSummaryDto]
    """Summaries returned for the requested page."""


class MonitorSummaryListResultDict(TypedDict):
    total: int
    data: list[SignalSummaryDtoDict]
