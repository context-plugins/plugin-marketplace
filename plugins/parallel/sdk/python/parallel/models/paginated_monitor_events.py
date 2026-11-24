from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.event import Event, EventDict
from .warning_parallel_ai_monitor_api import WarningParallelAiMonitorApi, WarningParallelAiMonitorApiDict


class PaginatedMonitorEvents(SdkBaseModel):
    """Paginated list of monitor events, newest first."""

    events: list[Event]
    """Monitor events returned by this request, ordered newest first."""

    next_cursor: Optional[str] = UNSET
    """Pass as ``cursor`` to retrieve more events. Absent when there are no more events."""

    warnings: Optional[list[WarningParallelAiMonitorApi]] = UNSET
    """Execution caveats for this page of events, e.g. compute limits."""


class PaginatedMonitorEventsDict(TypedDict):
    events: list[EventDict]
    next_cursor: NotRequired[str]
    warnings: NotRequired[list[WarningParallelAiMonitorApiDict]]
