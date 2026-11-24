from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .monitor_response import MonitorResponse, MonitorResponseDict


class PaginatedMonitorResponse(SdkBaseModel):
    """Paginated list of monitors."""

    monitors: list[MonitorResponse]
    """List of monitors for the current page."""

    next_cursor: Optional[str] = UNSET
    """Opaque pagination token. Pass as ``cursor`` to retrieve the next page. Absent when there are no more pages."""


class PaginatedMonitorResponseDict(TypedDict):
    monitors: list[MonitorResponseDict]
    next_cursor: NotRequired[str]
